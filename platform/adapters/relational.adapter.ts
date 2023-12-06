import {BaseEntity, EntityManager, EntityTarget, ObjectLiteral} from "typeorm";
import {Container, Inject, Service, Token} from "typedi";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { AppDataSource } from ".//packages/platform/user-management-api/src/data-source";

export interface RepoRequestContext {
	entityName: string;
	entity: BaseEntity;

	transactionId: string;
}

export const REPO_CONTEXT_TOKEN = new Token('REPO_CONTEXT_TOKEN')

export interface RelationalAdapterInterface<T> {
	findOneById: (id: number) => Promise<T | null>;
	findAll: () => Promise<T[]>;
	findByQuery: (query: any) => Promise<T[] | null>;
	create: <U>(payload: U) => Promise<T>;
	update: ((id: number, payload: Partial<T>) => Promise<number | undefined>) | ((id: number, payload: QueryDeepPartialEntity<T>) => Promise<number | undefined>);
	delete: (id: number) => Promise<number | undefined>;
}

@Service({transient: true})
export class RelationalAdapter<T extends ObjectLiteral> implements RelationalAdapterInterface<T> {
	entityManager: EntityManager;
	constructor(@Inject(REPO_CONTEXT_TOKEN) protected repoContext: RepoRequestContext) {
		this.entityManager = AppDataSource.manager;
	}

	private getEntity() {
		return ((Container.of(this.repoContext.transactionId).get(REPO_CONTEXT_TOKEN) as RepoRequestContext).entity)
	}

	// @ts-ignore
	findOneById = async (id: number): Promise<T | null> => {
		// @ts-ignore
		return await this.entityManager.findOneBy(this.getEntity() as EntityTarget<T>, {_id: id});
	}

	findAll = async (): Promise<T[]> => {
		// @ts-ignore
		return await this.entityManager.find(this.getEntity() as EntityTarget<T>);
	}

	findByQuery = async (query: any): Promise<T[] | null> => {
		// @ts-ignore
		return await this.entityManager.findBy(this.getEntity(), query);
	}

	create = async <U>(payload: U): Promise<T> => {
		// @ts-ignore
		return await this.entityManager.save(this.getEntity(), payload);
	}

	update = async (id: number, payload: QueryDeepPartialEntity<T>): Promise<number | undefined> => {
		// @ts-ignore
		await this.entityManager.update(this.getEntity(), id, payload);
		return id;
	}

	delete = async (id: number): Promise<number | undefined> => {
		// @ts-ignore
		await this.entityManager.softDelete(this.getEntity(), id);
		return id;
	}

}