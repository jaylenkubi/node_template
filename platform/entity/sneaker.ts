import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm"
import {IsEmpty, IsEnum, IsInt, IsOptional, IsString, ValidateNested} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude, Transform, Type} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {DecimalTransformer, IsDecimalValue} from "../utils/currency.helper";
import Decimal from "decimal.js";
import {SneakerColourEnum, SneakerSizeEnum} from "../schemas/sneaker.schema";
import {BrandEnitiy} from "./brand";
import {FavouriteEntity} from "./favorite";

export class Sneaker {

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	name!: string

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	description!: string

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'decimal', scale: 2, transformer: new DecimalTransformer()}))
	@decorate(Transform(({value}) => new Decimal(value), {toClassOnly: true}))
	@decorate(IsDecimalValue())
	price!: Decimal;

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	@decorate(IsEnum(SneakerColourEnum))
	colour!: SneakerColourEnum

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsEnum(SneakerSizeEnum))
	size!: SneakerSizeEnum

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(OneToOne(() => BrandEnitiy))
	@decorate(ValidateNested())
	@decorate(Type(() => BrandEnitiy))
	@decorate(IsOptional())
	@decorate(JoinColumn({ name: 'brandId' }))
	brand?: BrandEnitiy

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'int' }))
	@decorate(IsInt())
	brandId!: number;

	@AutoMap()
	@decorate(IsInt())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "int"}))
	quantityInStock!: number

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	type!: string

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(Column({ type: 'int' }))
	@decorate(IsInt())
	favouriteId!: number;

	@AutoMap()
	@decorate(IsOptional({ groups: ['update'] }))
	@decorate(
		ManyToOne(
			() => FavouriteEntity,
			(favourite) => favourite.sneakers,
			{ nullable: false }
		)
	)
	@decorate(ValidateNested())
	@decorate(Type(() => FavouriteEntity))
	@decorate(IsOptional())
	@decorate(JoinColumn({ name: 'favouriteId' }))
	favourite?: FavouriteEntity;
}

@Entity()
export class SneakerEntity extends Mixin(Sneaker, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const SneakerController = () => buildCrudController<Sneaker, SneakerEntity>(
	'sneaker',
	Subject.SNEAKER,
	SneakerEntity,
	'sneaker',
	rules,
	aclMiddleware,
	[],
	[],
	[]
)
export const SneakerService = (transactionId: string) => getContextualEntityService<Sneaker, SneakerEntity>('sneaker', SneakerEntity, transactionId);



