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
	getByQuery(query: any): Promise<EI[] | null>;
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
		logRequest(`Attempting to get user with id: ${id}`)
		return await this.getDb().findOneById(id)
	}

	getAll = async (): Promise<EI[]> => {
		logRequest(`Attempting to get all users`)
		return await this.getDb().findAll()
	}

	getByQuery = async (query: any): Promise<EI[] | null> => {
		logRequest(`Attempting to get users with query: ${JSON.stringify(query)}`)
		return await this.getDb().findByQuery(query)
	}

	create = async (payload: CI): Promise<EI> => {
		logRequest(`Attempting to create user with payload: ${JSON.stringify(payload)}`)
		return await this.getDb().create(payload)
	}

	update = async (id: number, payload: Partial<EI>): Promise<number | undefined> => {
		logRequest(`Attempting to update user with id: ${id} and payload: ${JSON.stringify(payload)}`)
		return await this.getDb().update(id, payload)
	}

	delete = async (id: number): Promise<number | undefined> => {
		logRequest(`Attempting to delete user with id: ${id}`)
		return await this.getDb().delete(id)
	}
}