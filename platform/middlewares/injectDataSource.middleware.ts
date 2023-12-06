import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { Container } from "typedi";
import { TRANSACTION_ID } from "./transaction.middleware";
import { REPO_CONTEXT_TOKEN } from "../adapters/relational.adapter";


@Middleware({ type: "before" ,priority: 999 })
export class InjectDataSourceMiddleware implements ExpressMiddlewareInterface {
	async use(req: any, res: any, next: () => void): Promise<void> {
		Container.of(req.headers[TRANSACTION_ID]).set(REPO_CONTEXT_TOKEN, {
			appD
		})
		next();
	}
}






































