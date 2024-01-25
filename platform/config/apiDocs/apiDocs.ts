import {validationMetadatasToSchemas} from "class-validator-jsonschema";
import {routingControllersToSpec} from "routing-controllers-openapi";
import {recurseWithObjFunction} from "../../utils/Helpers";
import {getMetadataArgsStorage, RoutingControllersOptions} from "routing-controllers";
import info from '../../../package.json';
import swaggerUi from 'swagger-ui-express'
import {appConfig} from "../appConfig";
import {Express} from "express";
import {OpenAPIObject} from "openapi3-ts/oas30";
const { defaultMetadataStorage } = require('class-transformer/cjs/storage')


const schemas = validationMetadatasToSchemas({
	classTransformerMetadataStorage: defaultMetadataStorage,
	refPointerPrefix: '#/components/schemas/',
})


const storage = getMetadataArgsStorage()

const retrieveBaseSpec = (options: RoutingControllersOptions) => {
	return routingControllersToSpec(storage, options, {
		components: {
			schemas: recurseWithObjFunction(
				schemas,
				(obj) => obj.$ref && obj.$ref.includes('Decimal'),
				(obj) => {
					delete obj.$ref;
					return { ...obj, type: 'string' };
				}
			),
			securitySchemes: {
				jwt: {
					name: 'Authorization',
					scheme: 'bearer',
					type: 'http',
					bearerFormat: 'JWT'
				}
			}
		},
		info: {
			description: info.description,
			title: info.name,
			version: info.version
		}
	})
}

export const retrieveSpec = (): OpenAPIObject => {
	return retrieveBaseSpec(appConfig())
}


export const addBaseApiDocs = (app: Express, spec: any) => {
	app.use('/swagger/swagger.json', (req: any, res: any) => {
		res.send(JSON.stringify(spec))
	})
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec, {
		swaggerOptions: {
			docExpansion: 'none',
			authAction: {
				JWT: {
					name: 'JWT',
					schema: {
						type: 'http',
						in: 'header',
						name: 'Authorization',
						description: 'JWT Authentication Token'
					},
					value: 'Bearer <JWT>'
				}
			}
		}
	}))
	return app
}