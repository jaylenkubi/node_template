import Axios, { AxiosRequestConfig } from 'axios';

// @ts-ignore
export const AXIOS_INSTANCE = Axios.create({ baseURL: import.meta.env.THE_CUBE_API_URL }); // use your own URL here or environment variable

let isObject = function (a: any) {
	return !!a && a.constructor === Object;
};

const getParams = (params: any) => {
	const newObj = params;
	if (isObject(newObj)) {
		for (const [key, value] of Object.entries(newObj)) {
			if (isObject(value) || Array.isArray(value)) {
				newObj[key] = JSON.stringify(value);
			}
		}
	}
	return newObj;
};
// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig,
): Promise<T> => {
	const source = Axios.CancelToken.source();
	const promise = AXIOS_INSTANCE({
		...config,
		...options,
		cancelToken: source.token,
		params: getParams(config.params),
	}).then(({ data }) => data);

	// @ts-ignore
	promise.cancel = () => {
		source.cancel('Query was cancelled');
	};

	return promise;
};
