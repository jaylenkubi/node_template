import {Request} from "express";
import {Strategy} from "passport-jwt";
import {UserEntity, UserService} from "../entity/User";
import {logger} from "../helper/logger";
import {TRANSACTION_ID} from "../middlewares/transaction.middleware";
import {NotFoundError, UnauthorizedError} from "routing-controllers";
import {TokenInterface} from "../types/token.type";
import {Container} from "typedi";
import {encrypt} from "../utils/Encrpyt";

export const handleUserAuth = (user: UserEntity, payload: TokenInterface, next: Function, req: any) => {
	if (!user) {
		logger.error(`User ${payload.sub.email} not found`);
		return next(new NotFoundError('No user found'), false);
	}

	if (user.email) {
		logger.info(
			`Found user with email ${user.email}`
		);
		const enrichedUser = {...user, password: '', type: payload.sub.type};

		const userString = JSON.stringify(enrichedUser);
		const transactionId = req.headers[TRANSACTION_ID];
		logger.info(`Passport Core - Setting sana user token to: ${userString} for transaction id: ${transactionId}`);
		Container.of(transactionId).set('THE_CUBE_TOKEN', encrypt(userString));

		return next(null, enrichedUser);
	} else {
		logger.error(`User not found with email ${payload.sub.email}`);
		return next(new UnauthorizedError(), false);
	}
};
const jwtVerify = (req: any, payload: TokenInterface, next: Function): void => {
	logger.info(`Checking token: ${JSON.stringify(payload)}`);

	const transactionId = req.headers[TRANSACTION_ID];
	UserService(transactionId)
		.getByQuery({where: {email: payload.sub.email}})
		.then(([user]) => handleUserAuth(user, payload, next, req))
		.catch((err) => {
			logger.error(err);
			return next(new NotFoundError(err), false);
		});
};
export const extractTokenFromReq = (req: Request): string | undefined => {
	return req?.headers?.authorization?.replace('Bearer ', '');
};

export const jwtStrategy = (secret: string): Strategy => {
	const jwtOptions = {
		jwtFromRequest: (req: Request): string | null => {
			const token = extractTokenFromReq(req);
			return token || null;
		},
		secretOrKey: secret,
		passReqToCallback: true,
	}
	return new Strategy(jwtOptions, jwtVerify)
};
