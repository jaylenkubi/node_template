import {CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IsDate, IsInt, IsOptional} from "class-validator";
import {decorate} from "ts-mixer";
import {Type} from "class-transformer";

@Entity()
export class BaseDBEntity {
	@decorate(PrimaryGeneratedColumn())
	@decorate(IsOptional())
	@decorate(IsInt())
	_id!: number

	@decorate(CreateDateColumn())
	@decorate(IsOptional())
	@decorate(IsDate())
	@decorate(Type(() => Date))
	createdAt!: Date

	@decorate(UpdateDateColumn())
	@decorate(IsOptional())
	@decorate(IsDate())
	@decorate(Type(() => Date))
	updatedAt!: Date

	@decorate(DeleteDateColumn())
	@decorate(IsOptional())
	@decorate(IsDate())
	@decorate(Type(() => Date))
	deletedAt!: Date
}