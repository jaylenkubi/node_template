import {RuleInterface} from "../middlewares/next.acls";
import {Type, UserEntityType} from "../types/user.type";
import {stringToEnum} from "../utils/Helpers";

const customerRules = (user: UserEntityType, transactionId: string): RuleInterface[] => []
export const baseRules = (user: UserEntityType, transactionId: string): RuleInterface[] => []
export const rules = (user: UserEntityType, transactionId: string): RuleInterface[] =>
	[...customerRules(user, transactionId), ...baseRules(user, transactionId)].filter(
		(rule) => rule.userType === stringToEnum(user.type.toUpperCase(), Type))
