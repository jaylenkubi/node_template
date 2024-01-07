import {baseInitializeConfig} from "./apiConfig";
import {jwtStrategy} from "./next.passport";


export const initializeConfig = async () => {
	return baseInitializeConfig(jwtStrategy, __dirname);
}