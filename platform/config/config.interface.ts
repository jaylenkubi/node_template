import { Strategy } from "passport-jwt";
import { Express } from "express";

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
	cli: any;
	migrationsRun: boolean;
}

export type JwtConfig = {
	secret: string;
	accessExpirationMinutes: number;
	refreshExpirationDays: number;
	resetPasswordExpirationMinutes: string;
}

export type Config = {
	env: string;
	jwt: JwtConfig;
	typeOrm: TypeOrmConfig;
	port: number;
}


export type TemplateConfig = {
	config: Config;
	jwtStrategy?:
		| {
		name: string;
		path: string;
	}
		| ((secret: string) => Strategy);
	addInitialMW: (app: Express, templateConfig: TemplateConfig) => Promise<Express>;
}