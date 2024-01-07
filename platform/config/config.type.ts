export type TypeOrmConfig = {
	type: "postgres";
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
	synchronize: boolean;
	logging?: boolean;
	entities?: any[];
	migrations?: any[];
	cache?: boolean;
	extra?: any;
	cli: any;
	migrationsRun: boolean;
}

export type JwtConfig = {
	secret: string;
	accessExpirationMinutes: number;
	refreshExpirationDays: number;
	resetPasswordExpirationMinutes: number;
}

export type EncryptionConfig = {
	saltRounds: number;
}

export type SystemConfig = {
	account: SystemAccountConfig
}

export type SystemAccountConfig = {
	username: string;
	password: string;
	_id: number;
}


export type Config = {
	env: string;
	jwt: JwtConfig;
	typeOrm: TypeOrmConfig;
	port: number;
	encryption: EncryptionConfig
	system: SystemConfig
}

