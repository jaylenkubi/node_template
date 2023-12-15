import {Action, createExpressServer, RoutingControllersOptions} from "routing-controllers";
import passport from "passport";
import {logger} from "./helper/logger";
import {jwtStrategy} from "./config/next.passport";

const jwt = {
	secret: "secret",
		accessExpirationMinutes: 30,
		refreshExpirationDays: 30,
		resetPasswordExpirationMinutes: "30m"
}
export const startServer = (options: RoutingControllersOptions, port: number) => {

	const app = createExpressServer({
		...options,
		authorizationChecker: async (action: Action, roles: any[]) => {
			let passportResult = await new Promise((resolve) => {
				passport.authenticate('JWT', {session: false}, (err: any, user: any, info: any) => {
					if(err || info) return resolve(false);
					if(user) return resolve(true);
					return resolve(false);
				})(action.request, action.response, action.next);
			});
			return passportResult as boolean;
		},
	})

	app.use(passport.initialize());

	// @ts-ignore
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