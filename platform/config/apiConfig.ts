import {Config} from "./config.type";
import {DataSource} from "typeorm";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

let configObj: Config;
let rawConfigObj: any;

export let PGDataSource: DataSource;

export const transform = (data: any, dir: string): Config => {
	return {
		env: process.env?.NODE_ENV || '',
		port: data['PORT'] || 8000,
		jwt: {
			secret: data['JWT_SECRET'] || 'secret',
			accessExpirationMinutes: data['JWT_ACCESS_EXPIRATION_MINUTES'] as unknown as number || 3600,
			refreshExpirationDays: data['JWT_REFRESH_EXPIRATION_DAYS'] as unknown as number || 30,
			resetPasswordExpirationMinutes: 10
		},
		encryption: {
			saltRounds: parseInt(data['ENCRYPTION_SALT_ROUNDS']) || 10
		},
		typeOrm: {
			type: data['TYPEORM_CONNECTION'] || 'postgres',
			host: data['TYPEORM_HOST'] || 'localhost',
			port: data['TYPEORM_PORT'] || 5432,
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
	configObj = transform(process.env, dir);
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


export const baseInitializeConfig = async (jwtStrategy: any, dir: string) => {
	await fetchConfig(dir)
	const currentConfig = config();
	return {
		config: currentConfig,
		jwtStrategy
	}
}
