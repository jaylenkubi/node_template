import "reflect-metadata";
import {AppDataSource} from "./data-source"
import {UserController} from "./controllers/UserController";
import {startServer} from "./server";
import {TransactionMiddleware} from "./middlewares/transaction.middleware";
import {ErrorMiddleware} from "./middlewares/error.middleware";
import e from "express";
import {TemplateConfig} from "./config/config.interface";


AppDataSource.initialize().then(async () => {
	await startServer({
		addInitialMW(app: e.Express, templateConfig: TemplateConfig): Promise<e.Express> {
			return Promise.resolve(undefined);
		}, config: undefined,
		routePrefix: "/api",
		controllers: [UserController],
		middlewares: [TransactionMiddleware, ErrorMiddleware]
	}, 3000)
}).catch(error => console.log(error))