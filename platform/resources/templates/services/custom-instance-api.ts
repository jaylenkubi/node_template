import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Service } from 'typedi';

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

@Service()
export class AxiosFactory {
	public axiosInstance: AxiosInstance;

	public baseConfig: Partial<AxiosRequestConfig> = {
		baseURL: process.env.CLINIC_API_URL
		/*paramsSerializer: {
            encode: (params) => {
                if (isObject(params)) {
                    for (const [key, value] of Object.entries(params)) {
                        if (isObject(value) || Array.isArray(value)) {
                            params[key] = JSON.stringify(value);
                        }
                    }
                }
                return qs.stringify(params);
            }
        } */ //(isObject(params) ? JSON.stringify(params) : qs.stringify(params))
	};

	constructor() {
		const axios = Axios.create();
		axios.interceptors.response.use(undefined, function (error) {
			return Promise.reject(error);
		});
		this.axiosInstance = axios;
	}
}

export const factoryInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
	const { axiosInstance, baseConfig } = new AxiosFactory();
	const source = Axios.CancelToken.source();

	const promise = axiosInstance({
		...config,
		cancelToken: source.token,
		params: getParams(config.params),
		...baseConfig
	}).then(({ data }) => data);

	// @ts-ignore
	promise.cancel = () => {
		source.cancel('Query was cancelled by React Query');
	};

	return promise;
};
