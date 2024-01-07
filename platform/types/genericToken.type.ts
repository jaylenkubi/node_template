import {BaseDbType} from "./base.db.type";
import {UserEntityType} from "./user.type";


export type GenericTokenType = {
	tokenType: TokenType;
	token: string;
	expiry: Date;
	meta?: any;
	userId?: number;
	user?: UserEntityType;
	userEmail?: string;
}

export enum TokenType {
	resetPassword = 'resetPassword',
	changePassword = 'changeEmail',
	validatePassword = 'validatePassword',
	changeEmail = 'changeEmail',
	validateEmail = 'validateEmail',
	meeting = 'meeting'
}

export interface GenericTokenEntityType extends GenericTokenType, BaseDbType {}
