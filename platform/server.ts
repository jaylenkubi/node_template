import express, {Express} from "express";
import {RoutingControllersOptions, useExpressServer} from "routing-controllers";
import passport from "passport";
import {logger} from "./helper/logger";
import {Config} from "./config/config.type";

export const startServer = async (config: { config: Config, jwtStrategy: any }, options: RoutingControllersOptions): Promise<Express> => {
	const {config: {port, jwt}, jwtStrategy} = config;
	let app = express()
	app = useExpressServer(app, options);

	app.use(passport.initialize());

	passport.use('JWT', jwtStrategy!(jwt.secret));

	const server = app.listen(port)
	server.keepAliveTimeout = 0
	server.headersTimeout = 0

	return new Promise((resolve) => {
		app.emit('startServer')
		app.on('closeServer', () => {
			process.exit(0)
		})
		logger.info(`Server started on http://localhost:${port}`)
		logger.info(`Swagger on http://localhost:${port}/api-docs`)
		resolve(app)
	})
}