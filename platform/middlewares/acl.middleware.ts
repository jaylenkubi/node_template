import {UserEntity} from "../entity/user";
import {RoutingControllerRole} from "../controllers/abstract.controller";
import {ForbiddenError, UnauthorizedError} from "routing-controllers";
import {logger} from "../helper/logger";
import {TRANSACTION_ID} from "./transaction.middleware";
import {buildAbilityForUser, RuleInterface} from "./next.acls";
import {UserEntityType} from "../types/user.type";

export const isObject = (a: any) => (!!a && a.constructor === Object) || (!!a && typeof a === 'object');

export function getUser(request: any): UserEntity {
	const user = /*request.headers[THE_CUBE_USER] ? JSON.parse(decrypt(request.headers[THE_CUBE_USER])) : */request.user;
	if (user && !isObject(user)) {
		return JSON.parse(user);
	}
	return user;
}

export const handleUserAcls = async (
	request: any,
	next: (err?: any) => any,
	rules: (user: UserEntity, transactionId: string) => RuleInterface[],
	roles: RoutingControllerRole[]
) => {
	const user = getUser(request);
	const extractedUserType = user.type; //process.env.coordsDivision === 'PLATFORM' ? user.platformUserType : user.mappedUserType;

	if (!extractedUserType) return next(new UnauthorizedError('User type not found'));
	if (extractedUserType === 'ADMIN') {
		logger.info(`Admin user, granting access`);
		return next(null);
	}

	const contextualUser = {...user, type: extractedUserType} as unknown as UserEntity;

	const userRules = rules(contextualUser, request.headers[TRANSACTION_ID],);
	const abilities = buildAbilityForUser(contextualUser, userRules);

	const aclChecks: boolean[] = [];

	for (const role of roles) {
		const {action, subject} = role;
		logger.info(`Testing authorization for ${extractedUserType} for user ${user.email} for ${action.toUpperCase()} on ${subject.toUpperCase()}`);

		//has rule(s)?
		if (!abilities.can(action, subject)) {
			const message = `User ${user.email} is not authorized to ${action.toUpperCase()} ${subject}`;
			logger.info(message);
			return next(new ForbiddenError(message));
		} else {
			aclChecks.push(true);
		}
	}
	const conditionCheck = aclChecks.every(Boolean);

	logger.info(`Condition checks for ${roles.map((r) => `${r.action} ${r.subject}`).join(', ')} for user ${user.email} is ${conditionCheck}`);
	if (conditionCheck) {
		return next(null);
	} else {
		return next(new ForbiddenError('You are not allowed to access this resource'));
	}
}

export const aclMiddleware = (roles: RoutingControllerRole[], rules: (user: UserEntityType, transactionId: string) => RuleInterface[]) => {
	return async function (request: any, _response: Response, next: (err: any) => any): Promise<void> {
		logger.info(`Testing authorization for ${roles.map((r) => `${r.action} ${r.subject}`).join(', ')}`);
		return handleUserAcls(request, next, rules, roles);
	};
};