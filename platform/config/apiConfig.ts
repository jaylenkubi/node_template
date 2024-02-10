import {Config} from "./config.type";
import {DataSource} from "typeorm";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {SecretManagerServiceClient} from "@google-cloud/secret-manager";
import dotenv from "dotenv";

let configObj: Config;
let rawConfigObj: any;

if (process.env.NODE_ENV == 'development') {
	const environment = process.env.NODE_ENV;
	dotenv.config({path: `.env.${environment}`});
}


const client = new SecretManagerServiceClient();

const getSecret = async (projectId: string, env: string): Promise<any> => {
	const [version] = await client.accessSecretVersion({name: `projects/${projectId}/secrets/codebase-credentials-${env}/versions/latest`});
	const secretDataBuffer = version?.payload?.data;
	if (!secretDataBuffer) {
		throw new Error("Secret data not found.");
	}
	const secretDataString = secretDataBuffer.toString();
	return JSON.parse(secretDataString);
}

export let PGDataSource: DataSource;

export const transform = (data: any, dir: string): Config => {

	return {
		env: process.env?.NODE_ENV || '',
		port: data['PORT'] || 8000,
		jwt: {
			secret: data['JWT_SECRET'] || 'secret',
			accessExpirationMinutes: parseInt(data['JWT_ACCESS_EXPIRATION_MINUTES']) || 3600,
			refreshExpirationDays: parseInt(data['JWT_REFRESH_EXPIRATION_DAYS'])  || 30,
			resetPasswordExpirationMinutes: 10
		},
		encryption: {
			saltRounds: parseInt(data['ENCRYPTION_SALT_ROUNDS']) || 10
		},
		typeOrm: {
			type: data['TYPEORM_CONNECTION'] || 'postgres',
			host: data['TYPEORM_HOST'] || 'localhost',
			port: parseInt(data['TYPEORM_PORT']) || 5432,
			username: data['TYPEORM_USERNAME'] || 'postgres',
			password: data['TYPEORM_PASSWORD'] || 'postgres',
			database: data['TYPEORM_DATABASE'] || 'postgres',
			logging: data['TYPEORM_LOGGING'] === 'true' || true,
			synchronize: data['TYPEORM_SYNCHRONIZE'] === 'true' || true,
			entities: [`${dir}/../entity/*{.ts,.js}`],
			migrations: [`${dir}/../entity/migrations/*{.ts,.js}`],
			cache: data['TYPEORM_CACHE'] === 'true' || true,
			extra: JSON.stringify({socketPath: data['TYPEORM_HOST']}),
			cli: {migrationsDir: `${dir}/../api/entity/migrations/`},
			migrationsRun: false
		},
		system: {
			account: {
				username: data['SYSTEM_ACCOUNT_USERNAME'],
				password: data['SYSTEM_ACCOUNT_PASSWORD'],
				_id: parseInt(data['SYSTEM_ACCOUNT_ID'])
			}
		}
	};
};

export const fetchConfig = async (dir: string): Promise<void> => {
	rawConfigObj = process.env;
	const data = await getSecret(rawConfigObj['GCP_PROJECT_ID'], rawConfigObj['NODE_ENV']);
	configObj = transform(data, dir);
	PGDataSource = await new DataSource({
		...configObj.typeOrm,
		autoLoadEntities: true,
		poolSize: 50
	} as PostgresConnectionOptions).initialize();
};

export const pgDataSource = (): DataSource => {
	return PGDataSource;
};

export const config = (): Config => {
	return configObj;
};

export const rawConfig = (): any => {
	return rawConfigObj;
};


export const baseInitializeConfig = async (jwtStrategy: any, addApiDocs: (app: any, spec: any) => any, retrieveSpec: () => any, dir: string) => {
	await fetchConfig(dir)
	const currentConfig = config();
	return {
		config: currentConfig,
		jwtStrategy,
		addApiDocs,
		retrieveSpec
	}
}
