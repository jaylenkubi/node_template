import {UserController} from "../entity/user-management/User";
import {RoutingControllersOptions} from "routing-controllers";
import {TransactionMiddleware} from "../middlewares/transaction.middleware";
import {ErrorMiddleware} from "../middlewares/error.middleware";
import {startServer} from "../server";
import {Config} from "./config.type";


export const appConfig: () => RoutingControllersOptions = () => ({
	routePrefix: "/v1",
	controllers: [UserController],
	middlewares: [TransactionMiddleware, ErrorMiddleware]
})

export const initServer = async (config: { config: Config, jwtStrategy: any }) => {
	return startServer(config, appConfig());
};
