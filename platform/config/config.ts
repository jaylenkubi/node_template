import {baseInitializeConfig} from "./apiConfig";
import {jwtStrategy} from "./next.passport";
import {addBaseApiDocs, retrieveSpec} from "./apiDocs/apiDocs";


export const initializeConfig = async () => {
	return baseInitializeConfig(jwtStrategy,addBaseApiDocs, retrieveSpec, __dirname);
}