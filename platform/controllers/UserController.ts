import {Get, JsonController, Param, Req} from "routing-controllers";
import {User, UserEntity} from "../entity/User";
import {TRANSACTION_ID} from "../middlewares/transaction.middleware";
import {getContextualEntityService} from "../helper/contextualEntityService";

@JsonController('/users')
export class UserController {


	@Get('/:id')
	async getUser(@Req() request: any, @Param('id') id: number) {
		const transactionId = request.headers[TRANSACTION_ID];
		return await getContextualEntityService<User, UserEntity>('user', UserEntity, transactionId).getById(id)
	}

	// @Get()
	// async getAllUsers() {
	// 	return this.userService;
	// }

	// @Post()
	// async createUser(@Body() user: User) {
	// 	return this.userService.create(user);
	// }
	//
	// @Put('/:id')
	// async updateUser(@Param('id') id: number, @Body() user: Partial<User>) {
	// 	return this.userService.update(id, user);
	// }
	//
	// @Delete('/:id')
	// async deleteUser(@Param('id') id: number) {
	// 	return this.userService.delete(id);
	// }

}