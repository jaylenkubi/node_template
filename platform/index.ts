import "reflect-metadata";
import {initializeConfig} from "./config/config";
import {initServer} from "./config/appConfig";

initializeConfig().then(async (config) => {
	await initServer(config)
}).catch(error => {
	throw error
})