import "reflect-metadata";
import {AppDataSource} from "./data-source"
import {UserController} from "./controllers/UserController";
import {startServer} from "./server";
import {TransactionMiddleware} from "./middlewares/transaction.middleware";
import {ErrorMiddleware} from "./middlewares/error.middleware";


AppDataSource.initialize().then(async () => {
	await startServer({
		routePrefix: "/api",
		controllers: [UserController],
		middlewares: [TransactionMiddleware, ErrorMiddleware]
	}, 3000)
}).catch(error => console.log(error))