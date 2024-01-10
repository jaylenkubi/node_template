import {InternalServerError, UnauthorizedError} from 'routing-controllers';
import Container from 'typedi';
import bcrypt from 'bcryptjs';
import {AuthSchema} from '../schemas/auth.schema';
import {shuffle} from "lodash";
import {UserService} from "../entity/user";
import {config} from "../config/apiConfig";
import {logger} from "../helper/logger";
import {UserEntityType} from "../types/user.type";
import {decrypt, encrypt} from "./Encrpyt";
import {isObject} from "../middlewares/acl.middleware";
import {AUTH_TOKEN, THE_CUBE_USER_TOKEN} from "../middlewares/authentication.middleware";
import {SYSTEM_TOKEN} from "../helper/contextualEntityService";
import dayjs from "dayjs";
import {generateToken, verifyToken} from "./token.helper";
import jwt from "jsonwebtoken";
import {AuthTokenResponseInterface, RegisterAndLoginResponseInterface, TokenInterface} from "../types/token.type";


export const generatedPassword = (charLength: number) => {
	const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
	const specialChars = '!@#$%^&*()';
	const numbers = '0123456789';

	const passwordChars: string[] = [];

	for (let i = 0; i < 2; i++) {
		passwordChars.push(uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)));
	}

	passwordChars.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));

	passwordChars.push(specialChars.charAt(Math.floor(Math.random() * specialChars.length)));

	for (let i = passwordChars.length; i < charLength; i++) {
		const randomCharSet = Math.floor(Math.random() * 3);
		if (randomCharSet === 0) {
			passwordChars.push(uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)));
		} else if (randomCharSet === 1) {
			passwordChars.push(lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)));
		} else {
			passwordChars.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
		}
	}

	const shuffledPasswordChars = shuffle(passwordChars);

	const password = shuffledPasswordChars.join('');
	return password;
};

const login = async (attemptUser: any, transactionId: string) => {
	attemptUser.email = attemptUser.email.toLowerCase();
	const [user] = await UserService(transactionId).getByQuery({
		where: {email: attemptUser.email}
	});

	if (user) {
		const isValidPassword = await bcrypt.compare(attemptUser.password, user.password);
		if (isValidPassword) {
			user.password = '';
			const tokens = await generateAuthTokens(user);
			return {user, tokens};
		} else {
			throw new UnauthorizedError('Invalid email / password provided');
		}
	} else {
		throw new UnauthorizedError('Invalid email / password provided');
	}
};

export const systemLoginAndSetupUserRequestContext = async (transactionId: string, loginFunc?: () => Promise<AuthSchema>) => {
	const email = process.env.systemAccountUsername || '';

	async function getSystemLogin() {
		return loginFunc
			? loginFunc()
			: login(
				{
					email,
					password: process.env.systemAccountPassword || ''
				},
				transactionId
			);
	}

	let systemLogin: RegisterAndLoginResponseInterface | undefined;
	let finalToken: string | undefined;
	let finalUser: UserEntityType | undefined;

	try {
		const currentToken = Container.get<string>(SYSTEM_TOKEN);
		const verifiedToken = jwt.verify(currentToken, config().jwt.secret);
		if (verifiedToken.sub) {
			logger.info(verifiedToken.sub);
			finalToken = currentToken;
			finalUser = verifiedToken.sub as unknown as UserEntityType
		} else throw new Error('No sub in token');
	} catch (e) {
		logger.error(e);
		systemLogin = await getSystemLogin();
		finalToken = systemLogin?.tokens?.access.token;
		finalUser = systemLogin?.user;
	}

	if (!finalToken) {
		throw new InternalServerError('System Login Error');
	} else {
		Container.set(SYSTEM_TOKEN, finalToken);
		setUpClients(
			finalToken,
			JSON.stringify({
				...finalUser,
				password: ''
			}),
			transactionId
		);
		return {user: finalUser, token: finalToken};
	}
};

export const systemLoginAndReturnCurrentUserCreds = async (transactionId: string, loginFunc?: () => Promise<AuthSchema>) => {
	let currentUser;
	let currentToken;

	try {
		const currentUserToken = Container.of(transactionId).get(THE_CUBE_USER_TOKEN);
		currentUser = decrypt(currentUserToken);
		currentToken = Container.of(transactionId).get(AUTH_TOKEN);
	} catch (e) {
		logger.error(e);
		currentUser = undefined;
		currentToken = undefined;
	}

	await systemLoginAndSetupUserRequestContext(transactionId, loginFunc);
	return {user: currentUser, token: currentToken};
};

const setUpClients = (token?: string, user?: any, transactionId?: string) => {
	Container.of(transactionId).set(AUTH_TOKEN, token);
	logger.info(`Auth Helper Core - Setting sana user token to: ${user} for transaction id: ${transactionId}`);
	Container.of(transactionId).set(THE_CUBE_USER_TOKEN, user ? encrypt(isObject(user) ? JSON.stringify(user) : user) : undefined);
	// removeClientHeader('Authorization', ClientGroup.ALL);
	// setClientToken(token);
	// removeClientHeader(SANA_USER, ClientGroup.ALL);
	// addClientHeader(SANA_USER, user, ClientGroup.ALL);
	/*removeClientHeader(SANA_USER_EMAIL, ClientGroup.ALL);
    addClientHeader(SANA_USER_EMAIL, userEmail, ClientGroup.ALL);

    removeClientHeader(SANA_USER_TYPE, ClientGroup.ALL);
    for (const [key, value] of Object.entries(userTypes)) {
        addClientHeader(SANA_USER_TYPE, value, key as ClientGroup);
    }*/
};

export const runWithElevatedPermissions = async <T>(func: () => Promise<T>, transactionId: string,  loginFunc?: () => Promise<AuthSchema>): Promise<T> => {
	const {user, token} = await systemLoginAndReturnCurrentUserCreds(transactionId, loginFunc);
	// if (!user) throw new UnauthorizedError('System Error');
	const result = await func();
	setUpClients(token, user, transactionId);
	return result;
};

export const generateAuthTokens = async (user: UserEntityType): Promise<AuthTokenResponseInterface> => {
	const {jwt} = config();

	const accessTokenExpires: dayjs.Dayjs = dayjs().add(jwt.accessExpirationMinutes, 'minutes');
	const accessToken: string = await generateToken(user, accessTokenExpires);

	const refreshTokenExpires: dayjs.Dayjs = dayjs().add(jwt.refreshExpirationDays, 'days');
	const refreshToken: string = await generateToken(user, refreshTokenExpires);

	return {
		emailVerificationToken: '',
		access: {
			token: accessToken,
			expires: accessTokenExpires.toDate()
		},
		refresh: {
			token: refreshToken,
			expires: refreshTokenExpires.toDate()
		}
	};
};

export const validateAccessToken = async (accessToken: string): Promise<TokenInterface> => {
	try {
		return await verifyToken(accessToken);
	} catch (e) {
		throw new UnauthorizedError('Token Not Valid');
	}
};
