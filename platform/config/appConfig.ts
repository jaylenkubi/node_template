import {UserController} from "../entity/user";
import {AuthController} from "../controllers/core/auth.controller";
import {GenericTokenController} from "../entity/genericToken";
import {TransactionMiddleware} from "../middlewares/transaction.middleware";
import {ErrorMiddleware} from "../middlewares/error.middleware";
import {InternalServerError, RoutingControllersOptions} from "routing-controllers";
import {startServer} from "../server";
import {Config} from "./config.type";
import {logger} from "../helper/logger";


export const appConfig: () => RoutingControllersOptions = () => ({
	routePrefix: "/v1",
	controllers: [UserController(), AuthController(), GenericTokenController()],
	middlewares: [TransactionMiddleware, ErrorMiddleware]
})

export const initServer = async (config: { config: Config, jwtStrategy: any }) => {
	try {
		return await startServer(config, appConfig());
	} catch (error: any) {
		logger.error(JSON.stringify(error));
		throw new InternalServerError(error);
	}
};
