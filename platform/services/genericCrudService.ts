import {Container, Inject, Service, Token} from "typedi";
import {RelationalAdapter, RelationalAdapterInterface} from "../adapters/relational.adapter";
import {ObjectLiteral} from "typeorm";
import {logRequest} from "../helper/logger";

export interface UserRequestContext {
	transactionId: string;
}
export const USER_CONTEXT_TOKEN = new Token('USER_CONTEXT_TOKEN')
export interface GenericCrudServiceInterface <CI , EI> {
	getById(id: number): Promise<EI | null>;
	getAll(): Promise<EI[]>;
	getByQuery(query: any): Promise<EI[]>;
	create(payload: CI): Promise<EI>;
	update(id: number, payload: Partial<EI>): Promise<number | undefined>;
	delete(id: number): Promise<number | undefined>;
}

@Service()
export class GenericCrudService<CI, EI extends ObjectLiteral > implements GenericCrudServiceInterface<CI, EI> {

	constructor(@Inject(USER_CONTEXT_TOKEN) protected userContext: UserRequestContext) {}
	private getDb() {
		return Container.of(this.userContext.transactionId).get<RelationalAdapterInterface<EI>>(RelationalAdapter)
	}

	getById = async (id: number) : Promise<EI | null> => {
		return await this.getDb().findOneById(id)
	}

	getAll = async (): Promise<EI[]> => {
		return await this.getDb().findAll()
	}

	getByQuery = async (query: any): Promise<EI[]> => {
		return await this.getDb().findByQuery(query)
	}

	create = async (payload: CI): Promise<EI> => {
		return await this.getDb().create(payload)
	}

	update = async (id: number, payload: Partial<EI>): Promise<number | undefined> => {
		return await this.getDb().update(id, payload)
	}

	delete = async (id: number): Promise<number | undefined> => {
		return await this.getDb().delete(id)
	}
}