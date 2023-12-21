import {Ability, AbilityBuilder} from '@casl/ability';
import {UserEntityType} from "../types/user.type";

export enum Action {
	MANAGE = 'manage',
	QUERY = 'query',
	GET_BY_ID = 'getById',
	CREATE = 'create',
	UPDATE = 'update',
	DELETE = 'delete',
	EXECUTE = 'execute'
}


type WhereType = {
	[x: string]: { [x: string]: any } | string | number | boolean | undefined;
};

export type Query = {
	where?: WhereType | WhereType[];
	relations?: {
		[x: string]: { [x: string]: any } | boolean;
	};
};


export interface RuleInterface {
	userType: string;
	action: Action;
	subject: string;
}


export const buildAbilityForUser = (_domainUser: UserEntityType, rules: RuleInterface[]): Ability => {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const {can, build} = new AbilityBuilder(Ability);

	rules.map((rule) => {
		can(rule.action, rule.subject);
	});

	return build();
};
