import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm"
import {IsDate, IsEmpty, IsEnum, IsInt, IsOptional, IsString, ValidateNested} from "class-validator";
import {decorate, Mixin} from "ts-mixer";
import {Exclude, Type} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {AutoMap} from "@automapper/classes";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {SneakerColourEnum} from "../schemas/sneaker.schema";
import {BrandEnitiy} from "./brand";
import {SneakerImageEntity} from "./sneakerImage";

export class Sneaker {

	@AutoMap()
	@decorate(IsString())
	@decorate(Column({type: "varchar"}))
	@decorate(IsOptional({groups: ["update"]}))
	name!: string

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	description!: string

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	@decorate(IsEnum(SneakerColourEnum))
	colour!: SneakerColourEnum

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(ManyToOne(() => BrandEnitiy,
		(brand: BrandEnitiy) => brand.sneakers,
		{nullable: true}))
	@decorate(ValidateNested())
	@decorate(Type(() => BrandEnitiy))
	@decorate(IsOptional())
	@decorate(JoinColumn({name: 'brandId'}))
	brand?: BrandEnitiy

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'int'}))
	@decorate(IsInt())
	brandId!: number;

	@AutoMap()
	@decorate(IsInt({each: true}))
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(IsOptional())
	@decorate(Column({type: "int", nullable: true, array: true}))
	categoryIds?: number[]

	@AutoMap()
	@decorate(IsDate())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Type(() => Date))
	releaseDate!: Date

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(ValidateNested({each: true}))
	@decorate(OneToMany(() => SneakerImageEntity,
		(sneakerImage: SneakerImageEntity) => sneakerImage.sneaker))
	@decorate(Type(() => SneakerImageEntity))
	sneakerImages?: SneakerImageEntity[]
}

@Entity({name: 'sneaker'})
export class SneakerEntity extends Mixin(Sneaker, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const SneakerController = () => buildCrudController<Sneaker, SneakerEntity>(
	'sneaker',
	Subject.SNEAKER,
	SneakerEntity,
	Sneaker,
	rules,
	aclMiddleware,
	[],
	[],
	[]
)
export const SneakerService = (transactionId: string) => getContextualEntityService<Sneaker, SneakerEntity>('sneaker', SneakerEntity, transactionId);



