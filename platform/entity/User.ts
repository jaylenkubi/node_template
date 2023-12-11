import {Column, Entity} from "typeorm"
import {IsEmpty, IsEnum, IsInt, IsOptional, IsString} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {TitleType} from "../types/user.type";

export class User {
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsEnum(TitleType))
	title!: TitleType

	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	firstName!: string

	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	lastName!: string

	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	email!: string

	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	password!: string

	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "int"}))
	age!: number

	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsOptional())
	@decorate(Column({type: "int", nullable: true}))
	phoneNumber?: number


}

@Entity()
export class UserEntity extends Mixin(User, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const UserService = (transactionId: string) => getContextualEntityService<User, UserEntity>('user', UserEntity, transactionId);



