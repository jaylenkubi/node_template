import {createExpressServer, RoutingControllersOptions} from "routing-controllers";
import * as passport from "passport";
import {logger} from "./helper/logger";


export const startServer = (options: RoutingControllersOptions, port: number) => {

    const app = createExpressServer({
        ...options,
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