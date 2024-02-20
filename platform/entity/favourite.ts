import {Entity} from "typeorm"
import {IsEmpty, IsInt, IsOptional, IsString} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";

export class Favourite {

	@AutoMap()
	@decorate(IsString())
	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	userId!: number

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(IsInt({each: true}))
	@decorate(IsOptional())
	sneakerIds?: number[];

}

@Entity({name: 'favourite'})
export class FavouriteEntity extends Mixin(Favourite, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const FavouriteController = () => buildCrudController<Favourite, FavouriteEntity>(
	'favourite',
	Subject.FAVOURITE,
	FavouriteEntity,
	Favourite,
	rules,
	aclMiddleware,
	[],
	[],
	[]
)
export const FavoriteService = (transactionId: string) => getContextualEntityService<Favourite, Favourite>('favourite', FavouriteEntity, transactionId);



