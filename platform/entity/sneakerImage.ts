import {AutoMap} from "@automapper/classes";
import {decorate, Mixin} from "ts-mixer";
import {IsEmpty, IsInt, IsOptional, IsString, ValidateNested} from "class-validator";
import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import {SneakerEntity} from "./sneaker";
import {Exclude, Type} from "class-transformer";
import {BaseDBEntity} from "./baseDBEntity";
import {buildCrudController} from "../controllers/abstract.controller";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";
import {Subject} from "../config/acls/subjects";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {BrandEnitiy} from "./brand";


export class SneakerImage {

	@AutoMap()
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(ManyToOne(() => SneakerEntity,
		(sneaker: SneakerEntity) => sneaker.sneakerImages,
		{nullable: true}))
	@decorate(ValidateNested())
	@decorate(Type(() => SneakerEntity))
	@decorate(IsOptional())
	@decorate(JoinColumn({name: 'sneakerId'}))
	sneaker?: SneakerEntity

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'int'}))
	@decorate(IsInt())
	sneakerId!: number;

	@AutoMap()
	@decorate(IsString())
	@decorate(IsOptional({groups: ["update"]}))
	@decorate(Column({type: "varchar"}))
	imageUrl!: string
}

@Entity({name: 'sneakerImage'})
export class SneakerImageEntity extends Mixin(SneakerImage, BaseDBEntity) {
	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const SneakerImageController = () => buildCrudController<SneakerImage, SneakerImageEntity>(
	'sneakerImage',
	Subject.SNEAKER_IMAGE,
	SneakerImageEntity,
	SneakerImage,
	rules,
	aclMiddleware,
	[],
	[],
	[]
)


export const SneakerImageService = (transactionId: string) => getContextualEntityService<SneakerImage, SneakerImageEntity>('sneakerImage', SneakerImageEntity, transactionId)