import "reflect-metadata";
import { UserEntity } from "./entity/User";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "password",
	database: "postgres",
	synchronize: true,
	logging: true,
	entities: [UserEntity],
	migrations: [],
	subscribers: []
});
