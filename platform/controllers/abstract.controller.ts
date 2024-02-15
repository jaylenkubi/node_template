import 'reflect-metadata';
import {Body, Delete, Get, JsonController, Param, Post, Put, QueryParams, Req, UseAfter, UseBefore, UseInterceptor} from 'routing-controllers';
import {ObjectLiteral} from 'typeorm';
import {capitalCase} from 'text-case';
import {TRANSACTION_ID} from '../middlewares/transaction.middleware';
import {AuthMiddleware} from "../middlewares/authentication.middleware";
import {getContextualEntityService} from "../helper/contextualEntityService";
import {Action, RuleInterface} from "../middlewares/next.acls";
import {UserEntityType} from "../types/user.type";
import {QueryOptions} from "../schemas/QueryOptions";
import {OpenAPI, ResponseSchema} from "routing-controllers-openapi";
import {plural} from "pluralize";

export type RoutingControllerRole = { action: Action; subject: string };

export const buildCrudController = <CI, EI extends ObjectLiteral>(
	entityName: string,
	subject: string,
	Entity: any,
	rules: (user: UserEntityType, transactionId: string) => RuleInterface[],
	aclMiddleware: (
		roles: RoutingControllerRole[],
		rules: (user: UserEntityType, transactionId: string) => RuleInterface[],
	) => (request: any, response: any, next: (err: any) => any) => Promise<void>,
	middlewares?: Function[],
	interceptors?: Function[],
	afterMiddlewares?: Function[]
) => {
	@OpenAPI({security: [{jwt: []}], tags: [capitalCase(entityName.trim())]})
	@UseBefore(AuthMiddleware, ...(middlewares ?? []))
	@UseAfter(...(afterMiddlewares ?? []))
	@UseInterceptor(...(interceptors ?? []))
	@JsonController(`/entities/${entityName}`)
	class AbstractController<CI, EI extends ObjectLiteral> {

		@Get('')
		@ResponseSchema(Entity, {isArray: true})
		@OpenAPI({summary: `Get all ${plural(entityName)}`, operationId: `getAll${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.QUERY, subject: subject}], rules))
		async getAll(@Req() req: any): Promise<EI[]> {
			return Object.keys(req.query).length > 0
				? await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).getByQuery(req.query)
				: await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID],).getAll();
		}

		@Get('/query')
		@ResponseSchema(Entity, {isArray: true})
		@OpenAPI({summary: `Get ${plural(entityName)} by query`, operationId: `getByQuery${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.QUERY, subject: subject}], rules))

		async getByQuery(@QueryParams() query: QueryOptions<EI>, @Req() req: any): Promise<EI[]> {
			return await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).getByQuery(query);

		}


		@Get('/:id', {})
		@ResponseSchema(Entity)
		@OpenAPI({summary: `Get ${entityName} by id`, operationId: `getOne${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.GET_BY_ID, subject: subject}], rules))
		async getOne(@Param('id') id: number, @Req() req: any): Promise<EI | null> {
			return await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).getById(id);
		}

		@Post('')
		@ResponseSchema(Entity)
		@OpenAPI({summary: `Create a ${entityName}`, operationId: `createOne${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.CREATE, subject: subject}], rules))
		//@ts-ignore
		async create(@Body() createBody: createClass, @Req() req: any): Promise<EI> {
			return await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).create(createBody);
		}

		@Put('/:id')
		@ResponseSchema(() => Number)
		@OpenAPI({summary: `Update a ${entityName}`, operationId: `updateOne${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.UPDATE, subject: subject}], rules))
		async update(
			@Param('id') id: number | string,
			//@ts-ignore
			@Body({validate: {groups: ['update']}, transform: {groups: ['update']}}) updateBody: Entity,
			@Req() req: any
		): Promise<number | undefined> {
			//@ts-ignore
			return await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).update(id, {
				...updateBody,
				_id: id
			});
		}

		@Delete('/:id')
		@ResponseSchema(() => Number)
		@OpenAPI({summary: `Remove a ${entityName}`, operationId: `removeOne${capitalCase(entityName.trim())}`})
		@UseBefore(aclMiddleware([{action: Action.DELETE, subject: subject}], rules))
		async remove(@Param('id') id: number, @Req() req: any): Promise<number | undefined> {
			return await getContextualEntityService<CI, EI>(entityName, Entity, req.headers[TRANSACTION_ID]).delete(id);
		}

	}

	return AbstractController<CI, EI>;
};
