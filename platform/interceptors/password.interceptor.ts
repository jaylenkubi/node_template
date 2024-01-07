import { Action, Interceptor, InterceptorInterface } from 'routing-controllers';

@Interceptor({ priority: 1 })
export class PasswordInterceptor implements InterceptorInterface {
	async intercept(_action: Action, content: any) {
		if (Object.hasOwn(content, 'password')) {
			content.password = undefined;
		}
		return content;
	}
}
