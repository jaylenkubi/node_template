import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { IsDate, IsDefined, IsEmpty, IsInt, IsOptional, IsString } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import { decorate, Mixin } from 'ts-mixer';
import { AutoMap } from '@automapper/classes';
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {GenericTokenEntityType, GenericTokenType, TokenType} from '../types/genericToken.type';
import {UserEntity} from "./user";
import {BaseDBEntity} from "./baseDBEntity";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {getContextualEntityService} from "../helper/contextualEntityService";



export class GenericToken implements GenericTokenType {
	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'varchar' }))
	@decorate(IsDefined())
	tokenType!: TokenType;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'varchar' }))
	@decorate(IsString())
	token!: string;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'varchar', nullable: true }))
	@decorate(IsString())
	@decorate(IsOptional())
	userEmail?: string;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'timestamptz' }))
	@decorate(IsDate())
	@decorate(Type(() => Date))
	expiry!: Date;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'json', nullable: true }))
	@decorate(IsOptional())
	meta?: any;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'int', nullable: true }))
	@decorate(IsInt())
	@decorate(IsOptional())
	userId?: number;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(
		ManyToOne(
			() => UserEntity,
			(user) => user.tokens
		)
	)
	@decorate(IsOptional())
	@decorate(JoinColumn({ name: 'userId' }))
	user?: UserEntity;
}

@Entity({ name: 'genericToken' })
export class GenericTokenEntity extends Mixin(GenericToken, BaseDBEntity) implements GenericTokenEntityType {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never;
}

export const GenericTokenController = () =>
	buildCrudController<GenericToken, GenericTokenEntity>(
		'genericToken',
		Subject.GENERIC_TOKEN,
		GenericTokenEntity,
		GenericToken,
		rules,
		aclMiddleware
	);

export const GenericTokenService = (transactionId: string) =>
	getContextualEntityService<GenericToken, GenericTokenEntity>('genericToken', GenericTokenEntity, transactionId);
