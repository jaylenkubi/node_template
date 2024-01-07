import {Response} from 'express';
import {ExpressMiddlewareInterface, UnauthorizedError} from 'routing-controllers';
import {Container, Token} from 'typedi';
import passport from "passport";
import {extractTokenFromReq} from "../config/next.passport";
import {logger} from "../helper/logger";
import {TRANSACTION_ID} from "./transaction.middleware";
import bcrypt from 'bcryptjs';

export const THE_CUBE_AUTHENTICATED = 'the-cube-authenticated';
export const THE_CUBE_USER = 'the-cube-user';
export const AUTH_TOKEN_ID = 'auth-token';
export const AUTH_TOKEN = new Token<string>(AUTH_TOKEN_ID);
export const THE_CUBE_USER_TOKEN = new Token<string>(THE_CUBE_USER);

export class AuthMiddleware implements ExpressMiddlewareInterface {
	use(request: any, response: Response, next: (err?: any) => any): void {
		const token = extractTokenFromReq(request);

		if (!token) {
			logger.info('No token found in request');
			throw new UnauthorizedError('No token found in request');
		}
		const transactionId = request.headers[TRANSACTION_ID];
		logger.info(`Setting transaction id (${transactionId}) auth token to: ${token}`);

		Container.of(transactionId).set(AUTH_TOKEN, token);

		// if (request.headers?.[THE_CUBE_USER]) {
		// 	const headerValue = request.headers?.[THE_CUBE_USER]?.toString();
		// 	logger.info(`Found user header: ${headerValue} in request`);
		// 	logger.info(`Next Auth - Setting sana user token to: ${headerValue} for transaction id: ${transactionId}`);
		// 	Container.of(transactionId).set(THE_CUBE_USER_TOKEN, request.headers[THE_CUBE_USER]);
		// }
		//
		// if (request.headers?.[THE_CUBE_AUTHENTICATED] && request.headers?.[THE_CUBE_USER]) {
		// 	logger.info(`Internal client request with all headers found, skipping auth`);
		// 	return next();
		// }
		logger.info('External request, checking auth');
		return passport.authenticate('JWT', {session: false})(request, response, next);
	}
}

export const generateAuthHash = async (phrase: string, saltRounds: number): Promise<string> => await bcrypt.hash(phrase, saltRounds);

export const validateAuthHash = async (phrase: string, currentHeader: string): Promise<boolean> => await bcrypt.compare(phrase, currentHeader);
