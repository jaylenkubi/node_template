import {IsEmpty, IsInt, IsOptional, IsString} from "class-validator";
import {AutoMap} from "@automapper/classes";
import {decorate, Mixin} from "ts-mixer";
import {Column, Entity} from "typeorm";
import {BaseDBEntity} from "./baseDBEntity";
import {Exclude} from "class-transformer";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {getContextualEntityService} from "../helper/contextualEntityService";

export class Category {

	@AutoMap()
	@decorate(IsString())
	@decorate(Column({type: "varchar"}))
	@decorate(IsOptional({groups: ["update"]}))
	name!: string

	@AutoMap()
	@decorate(IsInt({each: true}))
	@decorate(Column({type: "int", array: true, nullable: true}))
	@decorate(IsOptional({groups: ["update"]}))
	sneakerIds?: number[]
}

@Entity({name: 'category'})
export class CategoryEntity extends Mixin(Category, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const CategoryController = () => buildCrudController<Category, CategoryEntity>(
	'category',
	Subject.CATEGORY,
	CategoryEntity,
	rules,
	aclMiddleware,
	[],
	[],
	[]
)

export const CategoryService = (transactionId: string) => getContextualEntityService<Category, CategoryEntity>('category', CategoryEntity, transactionId)