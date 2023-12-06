import {Entity, Column} from "typeorm"
import {IsEmpty, IsInt, IsOptional, IsString} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";


export class User {
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	firstName!: string

	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	lastName!: string

	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "int"}))
	age!: number
}

@Entity()
export class UserEntity extends Mixin(User, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}




