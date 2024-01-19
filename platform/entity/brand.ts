import {Entity} from "typeorm"
import {IsEmpty, IsOptional, IsString} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";

export class Brand {

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	name!: string

}

@Entity()
export class BrandEnitiy extends Mixin(Brand, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const BrandController = () => buildCrudController<Brand, BrandEnitiy>(
	'brand',
	Subject.BRAND,
	BrandEnitiy,
	'sneaker',
	rules,
	aclMiddleware,
	[],
	[],
	[]
)
export const BrandService = (transactionId: string) => getContextualEntityService<Brand, BrandEnitiy>('brand', BrandEnitiy, transactionId);



