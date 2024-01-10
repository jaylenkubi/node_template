import {IsDate, IsEmail, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {UserEntity} from "../entity/user";
import {AuthTokenResponseInterface, RegisterAndLoginResponseInterface} from "../types/token.type";

export class AccessToken implements AccessToken {
	@IsString()
	token!: string;

	@IsDate()
	@Type(() => Date)
	expires!: Date;
}

export class TokenSchema implements AuthTokenResponseInterface {
	@ValidateNested()
	@Type(() => AccessToken)
	access!: AccessToken;

	@ValidateNested()
	@Type(() => AccessToken)
	refresh!: AccessToken;

	@IsString()
	emailVerificationToken!: string;
}

export class AuthSchema implements RegisterAndLoginResponseInterface {
	@ValidateNested()
	@Type(() => TokenSchema)
	tokens!: TokenSchema;

	@ValidateNested()
	@Type(() => UserEntity)
	user!: UserEntity;
}

export class ValidateSchema {
	@IsString()
	accessToken!: string;
}


export class UserCredential {
	@IsEmail()
	email!: string;

	@IsString()
	password!: string;
}