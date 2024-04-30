import { Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Container, Token } from 'typedi';
import crypto from 'crypto';
import {logger} from "../helper/logger";

export const TRANSACTION_ID = 'transaction-id';

export const TRANSACTION_TOKEN = new Token<string>(TRANSACTION_ID);

export const getOrSetTransactionId = (request: any) => {
	let transactionId = request.headers[TRANSACTION_ID] as string;

	if (!request.headers) {
		request.headers = {};
	}

	if (!transactionId || transactionId === '') {
		transactionId = crypto.randomUUID();
		request.headers[TRANSACTION_ID] = transactionId;
	}

	Container.of(transactionId).set(TRANSACTION_TOKEN, transactionId);
};

export class TransactionMiddleware implements ExpressMiddlewareInterface {
	use(request: Request, _response: Response, next: (err?: any) => any): void {
		logger.info(`HEADERS: ${JSON.stringify(request.headers)}`);
		getOrSetTransactionId(request);
		return next();
	}
}