import {AutoMap} from "@automapper/classes";
import {decorate, Mixin} from "ts-mixer";
import {IsEmpty, IsEnum, IsInt, IsOptional, ValidateNested} from "class-validator";
import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {DecimalTransformer, IsDecimalValue} from "../utils/currency.helper";
import {Exclude, Transform, Type} from "class-transformer";
import Decimal from "decimal.js";
import {SneakerSizeEnum} from "../schemas/sneaker.schema";
import {SneakerEntity} from "./sneaker";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {BaseDBEntity} from "./baseDBEntity";
import {buildCrudController} from "../controllers/abstract.controller";
import {Subject} from "../config/acls/subjects";
import {rules} from "../rules/core.rules";
import {aclMiddleware} from "../middlewares/acl.middleware";


export class Size {

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'decimal', scale: 2, transformer: new DecimalTransformer()}))
	@decorate(Transform(({value}) => new Decimal(value), {toClassOnly: true}))
	@decorate(IsDecimalValue())
	price!: Decimal;

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(Column({type: 'varchar'}))
	@decorate(IsEnum(SneakerSizeEnum))
	sneakerSize!: SneakerSizeEnum;

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(IsInt())
	@decorate(Column({type: 'int'}))
	quantityInStock!: number;

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(OneToOne(() => SneakerEntity, {nullable: true}))
	@decorate(IsInt())
	@decorate(Column({type: 'int', nullable: true}))
	sneakerId?: number

	@AutoMap()
	@decorate(IsOptional({groups: ['update']}))
	@decorate(OneToOne(() => SneakerEntity, {nullable: true}))
	@decorate(ValidateNested())
	@decorate(Type(() => SneakerEntity))
	@decorate(JoinColumn({name: 'sneakerId'}))
	sneaker?: SneakerEntity

}

@Entity({name: 'size'})
export class SizeEntity extends Mixin(Size, BaseDBEntity) {

	@decorate(Exclude())
	@decorate(IsEmpty())
	private _!: never
}

export const SizeController = () => buildCrudController<Size, SizeEntity>(
	'size',
	Subject.SNEAKER_SIZE,
	SizeEntity,
	rules,
	aclMiddleware,
	[],
	[],
	[]
)

export const SizeService = (transactionId: string) => getContextualEntityService<Size, SizeEntity>('size', SizeEntity, transactionId)