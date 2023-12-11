import {UserEntityType} from "./user.type";

export type TokenInterface = {
	sub: UserEntityType;
	iat: number;
	exp: number;
}

export type AccessTokenInterface = {
	token: string;
	expires: Date;
}

export type AuthTokenResponseInterface = {
	emailVerificationToken: string;
	access: AccessTokenInterface;
	refresh: AccessTokenInterface;
}

export type RegisterAndLoginResponseInterface = {
	user?: UserEntityType;
	tokens?: AuthTokenResponseInterface;
}

export type ValidateTokenResponseInterface = {
	user?: UserEntityType;
	token?: TokenInterface;
}
