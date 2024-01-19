import {Entity, OneToMany} from "typeorm"
import {IsEmpty, IsInt, IsOptional, IsString, ValidateNested} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude, Type} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {SneakerEntity} from "./sneaker";

export class Favourite {

	@AutoMap()
	@decorate(IsString())
	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	usrId!: number

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(
		OneToMany(
			() => SneakerEntity,
			(sneaker) => sneaker.favourite
		)
	)
	@decorate(ValidateNested({ each: true }))
	@decorate(Type(() => SneakerEntity))
	@decorate(IsOptional())
	sneakers?: SneakerEntity[];

}

@Entity()
export class FavouriteEntity extends Mixin(Favourite, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const FavouriteController = () => buildCrudController<Favourite, FavouriteEntity>(
	'favourite',
	Subject.FAVOURITE,
	FavouriteEntity,
	'favourite',
	rules,
	aclMiddleware,
	[],
	[],
	[]
)
export const FavoriteService = (transactionId: string) => getContextualEntityService<Favourite, Favourite>('favourite', FavouriteEntity, transactionId);



