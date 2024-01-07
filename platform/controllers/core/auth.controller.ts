import {Body, ForbiddenError, JsonController, Post, Req, UnauthorizedError} from "routing-controllers";
import {OpenAPI, ResponseSchema} from "routing-controllers-openapi";
import {User, UserEntity, UserService} from "../../entity/user-management/User";
import {TRANSACTION_ID} from "../../middlewares/transaction.middleware";
import bcrypt from "bcryptjs";
import {RegisterAndLoginResponseInterface, TokenInterface} from "../../types/token.type";
import {config} from "../../config/apiConfig";
import {Type, UserType} from "../../types/user.type";
import {AuthSchema, UserCredential, ValidateSchema} from "../../schemas/auth.schema";
import {generateAuthTokens, validateAccessToken} from "../../utils/auth.helper";
import dayjs from "dayjs";
import {GenericTokenService} from "../../entity/core/genericToken";
import {generateGenericToken} from "../../utils/token.helper";
import {TokenType} from "../../types/genericToken.type";

export const AuthController = () => {
	@JsonController('/exec/auth')
	class authController {

		@Post('/login')
		@ResponseSchema(AuthSchema)
		@OpenAPI({summary: 'Platform auth user login', operationId: 'login'})
		async login(@Body() attemptUser: UserCredential, @Req() req: any): Promise<AuthSchema> {
			const transactionId = req.headers[TRANSACTION_ID] as string;
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
		}

		@Post('/register')
		@ResponseSchema(AuthSchema)
		@OpenAPI({summary: 'Platform auth user registration', operationId: 'register'})
		async register(@Body() newUser: User, @Req() req: any): Promise<RegisterAndLoginResponseInterface> {
			const transactionId = req.headers[TRANSACTION_ID];
			const {
				encryption: {saltRounds}
			} = config();
			if (newUser.type === Type.ADMIN) throw new ForbiddenError("Can't create admin user");
			newUser.password = await bcrypt.hash(newUser.password, config()?.encryption?.saltRounds ?? 8);
			newUser.email = newUser.email.trim().toLowerCase();
			const user = await UserService(transactionId).create(newUser);
			user.password = '';
			const tokens = await generateAuthTokens(user);

			const generatedEmailToken = await generateGenericToken(saltRounds);
			const emailVerificationToken = generatedEmailToken;

			await GenericTokenService(transactionId).create({
				expiry: dayjs().add(24, 'hour').toDate(),
				meta: undefined,
				token: generatedEmailToken,
				tokenType: TokenType.validateEmail,
				user
			});

			return {user, tokens: {...tokens, emailVerificationToken}};
		}

		@Post('/validate')
		@ResponseSchema(UserEntity)
		@OpenAPI({
			summary: 'Platform auth token validation',
			operationId: 'validate'
		})
		async validate(@Body() accessTokenBody: ValidateSchema, @Req() _req: any): Promise<UserType> {
			const token: TokenInterface = await validateAccessToken(accessTokenBody.accessToken);
			return token.sub;
		}
	}

	return authController
}