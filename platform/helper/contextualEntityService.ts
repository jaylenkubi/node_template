import {BaseEntity, ObjectLiteral} from "typeorm";
import {Container, Token} from "typedi";
import {logger} from "./logger";
import {GenericCrudService, GenericCrudServiceInterface, USER_CONTEXT_TOKEN} from "../services/genericCrudService";
import {REPO_CONTEXT_TOKEN} from "../adapters/relational.adapter";

export const SYSTEM_TOKEN = new Token<string>('SYSTEM_TOKEN');

export const getContextualEntityService = <CI, EI extends ObjectLiteral>(
	entityName: string,
	entityClass: typeof BaseEntity | any,
	transactionId: string,
): GenericCrudServiceInterface<CI, EI> => {
	logger.info(`Creating service for entity ${entityName} with transactionId ${transactionId}`);
	return Container.of(transactionId)
		.set(USER_CONTEXT_TOKEN, {
			transactionId
		})
		.set(REPO_CONTEXT_TOKEN, {
			entityName,
			entity: entityClass,
			transactionId
		})
		.get<GenericCrudServiceInterface<CI, EI>>(GenericCrudService);
};