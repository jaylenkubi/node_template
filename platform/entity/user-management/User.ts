import {Column, Entity} from "typeorm"
import {IsEmpty, IsEnum, IsInt, IsOptional, IsString} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude} from "class-transformer";
import {BaseDBEntity} from "../core/baseDBEntity";
import {getContextualEntityService} from "../../helper/contextualEntityService";
import {TitleType, Type} from "../../types/user.type";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../../controllers/abstract.controller";
import {Subject} from "../../config/acls/subjects";
import {rules} from "../../rules/core.rules";
import {aclMiddleware} from "../../middlewares/acl.middleware";
import {PasswordInterceptor} from "../../interceptors/password.interceptor";

export class User {

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsEnum(TitleType))
	title!: TitleType

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	firstName!: string

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	lastName!: string

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	email!: string

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	password!: string

	@AutoMap()
	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "int"}))
	age!: number

	@AutoMap()
	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsOptional())
	@decorate(Column({type: "varchar", nullable: true}))
	phoneNumber?: string

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'varchar'}))
	@decorate(IsEnum(Type))
	type!: Type;
}

@Entity()
export class UserEntity extends Mixin(User, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	// @ts-ignore
	private _!: never
}

export const UserController = () => buildCrudController<User, UserEntity>(
	'user',
	Subject.USER,
	UserEntity,
'user',
	rules,
	aclMiddleware,
	[],
	[PasswordInterceptor],
	[]

)
export const UserService = (transactionId: string) => getContextualEntityService<User, UserEntity>('user', UserEntity, transactionId);



