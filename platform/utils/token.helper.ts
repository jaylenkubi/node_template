import jwt from 'jsonwebtoken';
import {UnauthorizedError} from 'routing-controllers';
import dayjs from 'dayjs';
import {config} from "../config/apiConfig";
import {TokenInterface} from "../types/token.type";
import {UserEntityType} from "../types/user.type";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export const generateToken = async (user: UserEntityType, expires: dayjs.Dayjs): Promise<string> => {
	const secret = config().jwt.secret;
	const payload: TokenInterface = {
		sub: user,
		iat: dayjs().unix(),
		exp: expires.unix()
	};
	return jwt.sign(payload, secret);
};

export const verifyToken = async (token: string): Promise<TokenInterface> => {
	const secret = config().jwt.secret;
	const verifiedToken: TokenInterface = jwt.verify(token, secret) as unknown as TokenInterface;
	if (!verifiedToken.sub) {
		throw new UnauthorizedError('Token is invalid');
	}
	return verifiedToken;
};

export const generateGenericToken = async (salt: number): Promise<string> => {
	return bcrypt.hash(crypto.randomUUID(), salt);
};
