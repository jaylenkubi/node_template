import {Column, Entity, OneToMany} from "typeorm"
import {IsEmpty, IsEnum, IsInt, IsOptional, IsString, ValidateNested} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude, Type} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {TitleType, UserType} from "../types/user.type";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {PasswordInterceptor} from "../interceptors/password.interceptor";
import {GenericTokenEntity} from "./genericToken";

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
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsOptional())
	@decorate(Column({type: "varchar", nullable: true}))
	phoneNumber?: string

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'varchar'}))
	@decorate(IsEnum(UserType))
	type!: UserType;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(
		OneToMany(
			() => GenericTokenEntity,
			(genericToken) => genericToken.user
		)
	)
	@decorate(ValidateNested({ each: true }))
	@decorate(Type(() => GenericTokenEntity))
	@decorate(IsOptional())
	tokens?: GenericTokenEntity[];
}

@Entity({name: 'user'})
export class UserEntity extends Mixin(User, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const UserController = () => buildCrudController<User, UserEntity>(
	'user',
	Subject.USER,
	UserEntity,
	User,
	rules,
	aclMiddleware,
	[],
	[PasswordInterceptor],
	[]

)
export const UserService = (transactionId: string) => getContextualEntityService<User, UserEntity>('user', UserEntity, transactionId);



