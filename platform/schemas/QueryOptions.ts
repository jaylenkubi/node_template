import {IsBoolean, IsInt, IsNumber, IsObject, IsOptional} from 'class-validator';
import {FindOptionsOrder, FindOptionsRelations, FindOptionsSelect, FindOptionsWhere} from 'typeorm';
import {Type} from 'class-transformer';

type WhereClause<T> = { [P in keyof T]?: any } | { [P in keyof T]?: any }[];

const GreaterThanOrEqual = (value: any) => {
	return {$gte: value};
};

const LessThanOrEqual = (value: any) => {
	return {$lte: value};
};

const GreaterThan = (value: any) => {
	return {$gt: value};
};

const LessThan = (value: any) => {
	return {$lt: value};
};

const Between = (from: any, to: any) => {
	return {$btwn: [from, to]};
};

const Not = (value: any) => {
	return {$not: value};
};

const Like = (value: any) => {
	return {$like: value};
};

const In = (value: any[]) => {
	return {$in: value};
};

const Raw = (...value: any) => {
	return {$raw: value};
};

const Equal = (value: any) => {
	return {$eq: value};
};

const Contains = (value: any) => {
	return {$contains: value};
};

export const Operator = {
	GreaterThanOrEqual,
	LessThanOrEqual,
	GreaterThan,
	LessThan,
	Between,
	Not,
	In,
	Like,
	Raw,
	Equal,
	Contains
};

export class QueryOptions<Entity> {
	@IsOptional()
	select?: FindOptionsSelect<Entity>;

	@IsOptional()
	relations?: FindOptionsRelations<Entity>;

	@IsOptional()
	where?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[];

	@IsOptional()
	order?: FindOptionsOrder<Entity>;

	@IsNumber()
	@IsOptional()
	skip?: number;

	@IsInt()
	@IsOptional()
	take?: number;

	@IsBoolean()
	@IsOptional()
	cache?: boolean;
}

export interface ExternalQueryOptions<T> {
	select?: (keyof T)[];
	relations?: string[];
	where?: WhereClause<T> | WhereClause<T>[];
	order?: {
		[P in keyof T]: 'ASC' | 'asc' | 'DESC' | 'desc' | 1 | -1;
	};
	skip?: number;
	take?: number;
	cache?: boolean;
}


export class InternalQueryOptions<Entity> {
	@IsObject()
	@IsOptional()
	select?: FindOptionsSelect<Entity>;

	@IsObject()
	@IsOptional()
	relations?: FindOptionsRelations<Entity>;

	@IsObject()
	@IsOptional()
	where?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[];

	@IsOptional()
	order?: FindOptionsOrder<Entity>;

	@IsNumber()
	@Type(() => Number)
	@IsOptional()
	skip?: number;

	@IsInt()
	@IsOptional()
	take?: number;

	@IsBoolean()
	@IsOptional()
	cache?: boolean;
}
