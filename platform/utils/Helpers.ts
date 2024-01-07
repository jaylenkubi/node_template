import { Request } from 'express';
import { Token } from 'typedi';
import dayjs from 'dayjs';

export const SYSTEM_TOKEN = new Token<string>('SYSTEM_TOKEN');

export const average = (arr: number[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

export const dataURLtoFile = (dataUrl: string, filename: string) => {
	const arr = dataUrl.split(',');
	const mime = arr[0].match(/:(.*?);/)![1];
	const bstr = atob(arr[arr.length - 1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
};

export const getByteString = (dataURI: string) => atob(dataURI.split(',')[1]);

export const getMimeString = (dataURI: string) => dataURI.split(',')[0].split(':')[1].split(';')[0];

export const dataURItoBlob = (dataURI: string) => {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	const byteString = getByteString(dataURI);

	// separate out the mime component
	const mimeString = getMimeString(dataURI);

	// write the bytes of the string to an ArrayBuffer
	const ab = new ArrayBuffer(byteString.length);

	// create a view into the buffer
	const ia = new Uint8Array(ab);

	// set the bytes of the buffer to the correct values
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// write the ArrayBuffer to a blob, and you're done
	const blob = new Blob([ab], { type: mimeString });
	return blob;
};

export const dotAccessor = (dotString: string, obj: any): any => (dotString === '' ? obj : dotString.split('.')!.reduce((acc, val) => acc[val], obj));

export const isCloudEnv = (): boolean => process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development';

export const isProduction = (): boolean => process.env.NODE_ENV === 'production';

export const checkIfInArray = (val: any, arr: any[]) => arr.some((el) => val.includes(el));

export const getToday = () => dayjs(new Date()).format('DD/MM/YYYY');

export const stringToEnum = (str: string, enu: any) => enu[str as keyof typeof enu];

export const clone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const replaceAll = (str: string, find: string, replace: string) => str.replace(new RegExp(find, 'g'), replace);

export const getDateForFilename = () => dayjs().format('YYYY_MM_DD-HH_mm');

export const roundToTwoDecimalPlaces = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export const extractNumbersFromString = (str: string) => parseInt(str.match(/\d/g)?.join('') || '');

export const extractLettersFromString = (str: string) => parseInt(str.match(/\w/g)?.join('') || '');

export const formatDateForDynamics = (date: string | Date) => dayjs(date).format('YYYY-MM-DD');

export const isDateWithinRange = (startDate: string | Date, endDate: string | Date, queryDate: string | Date) =>
	dayjs(queryDate).isAfter(new Date(startDate)) && dayjs(queryDate).isBefore(new Date(endDate));

export const removeNullValueKeysFromObject = (obj: any) => {
	Object.keys(obj).forEach((key) => obj[key] === null && delete obj[key]);
	return obj;
};

export const isDate = (date: string | Date) => new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date).getTime());

export const buildRangeQuery = (queryKey: string, values: any[]) => values.map((value) => ({ [queryKey]: value }));

export const formatDateForEDI = (date: string | Date) => dayjs(date).format('YYYYMMDD');

export const calculateTotalForEDILines = (fieldName: string, lines: any[]) =>
	lines.reduce((previousValue: number, currentValue: any) => {
		return previousValue + (currentValue[fieldName] as number);
	}, 0);

export const getDaysBetween = (start: string, end: string) => dayjs(end).diff(dayjs(start), 'days') - 1;

export const containsSpecialChars = (str: string) => (str.match(/[a-zA-Z0-9]/g)?.length || 0) > 0;

export const generateCompositeKeyForDynamics = (id: string, additionalKeyFields: string[]) => `${additionalKeyFields.join("','")}','${id}`;

export const groupBy = (xs: any[], key: string) => {
	return xs.reduce((rv, x) => {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
};

export const negative = (a: number) => a * -1;

export const getIntersectionOfTwoArrays = (a: any[], b: any[]) => a.filter((x) => b.includes(x));
export const getDifferenceReturningUniqueFromFirstArray = (a: any[], b: any[]) => a.filter((x) => !b.includes(x));

export const getOneWeekAgo = () => dayjs().subtract(1, 'weeks').toDate();

export const limitStringLengthTo = (string: string, length: number) => (string.length > length ? string.substring(0, length) : string);

export const getNDaysAgo = (n: number) => dayjs().subtract(n, 'days').toDate();

export const getNDaysFromNow = (n: number) => dayjs().add(n, 'days').toDate();

export const isObject = (a: any) => (!!a && a.constructor === Object) || (!!a && typeof a === 'object');

export const isEmpty = (a: any) => Object.keys(a).length === 0;

export const recurseWithAsyncValueFunction = async (obj: any, valueFunction: (obj: any, key: string, inputValue: any) => Promise<any>): Promise<any> => {
	if (Array.isArray(obj)) {
		return Promise.all(obj.map(async (val) => recurseWithAsyncValueFunction(val, valueFunction)));
	} else if (obj) {
		for (const [key, value] of Object.entries(obj)) {
			if (value) {
				if (Array.isArray(value)) {
					obj[key] = await value.reduce(async (arr, val) => {
						if (isObject(val)) {
							return [...(await arr), await recurseWithAsyncValueFunction(val, valueFunction)];
						} else {
							return [...(await arr), await valueFunction(obj, key, val)];
						}
					}, Promise.resolve([]));
				} else if (isObject(value)) {
					obj[key] = await recurseWithAsyncValueFunction(clone(value), valueFunction);
				} else {
					obj[key] = await valueFunction(obj, key, value);
				}
			}
		}
	}
	return obj;
};

export const recurseWithValueFunction = (obj: any, valueFunction: (obj: any, key: string, inputValue: any) => any): any => {
	if (Array.isArray(obj)) {
		return obj.map((val) => recurseWithValueFunction(val, valueFunction));
	} else if (obj) {
		for (const [key, value] of Object.entries(obj)) {
			if (value) {
				if (Array.isArray(value)) {
					obj[key] = value.reduce((arr, val) => {
						if (isObject(val)) {
							return [...arr, recurseWithValueFunction(val, valueFunction)];
						} else {
							return [...arr, valueFunction(obj, key, val)];
						}
					}, []);
				} else if (isObject(clone(value))) {
					obj[key] = recurseWithValueFunction(value, valueFunction);
				} else {
					obj[key] = valueFunction(obj, key, value);
				}
			}
		}
	}
	return obj;
};

export const recurseWithKeyValueFunction = (obj: any, keyValueFunction: (obj: any, key: string, value: any) => any): any => {
	if (Array.isArray(obj)) {
		return obj.map((val) => recurseWithKeyValueFunction(val, keyValueFunction));
	} else if (obj) {
		for (const [key, value] of Object.entries(obj)) {
			if (value) {
				if (Array.isArray(value)) {
					obj[key] = value.reduce((arr, val) => {
						if (isObject(val)) {
							return [...arr, recurseWithKeyValueFunction(val, keyValueFunction)];
						} else {
							return [...arr, keyValueFunction(obj, key, val)];
						}
					}, []);
				} else if (isObject(clone(value))) {
					obj[key] = recurseWithKeyValueFunction(value, keyValueFunction);
				} else {
					obj[key] = keyValueFunction(obj, key, value);
				}
			}
		}
	}
	return obj;
};

export const recurseWithAsyncKeyValueFunction = async (obj: any, keyValueFunction: (key: string, value: any) => Promise<any>): Promise<any> => {
	if (Array.isArray(obj)) {
		return Promise.all(obj.map(async (val) => recurseWithAsyncKeyValueFunction(val, keyValueFunction)));
	} else if (obj) {
		for (const [key, value] of Object.entries(obj)) {
			if (value) {
				if (Array.isArray(value)) {
					obj[key] = await value.reduce(async (arr, val) => {
						if (isObject(val)) {
							return [...(await arr), await recurseWithAsyncKeyValueFunction(val, keyValueFunction)];
						} else {
							return [...(await arr), await keyValueFunction(key, val)];
						}
					}, Promise.resolve([]));
				} else if (isObject(value)) {
					obj[key] = await recurseWithAsyncKeyValueFunction(value, keyValueFunction);
				} else {
					obj[key] = await keyValueFunction(key, value);
				}
			}
		}
	}
	return obj;
};

export const recurseWithObjFunction = (obj: any, objCheckFunction: (obj: any) => boolean, objFunction: (obj: any) => any): any => {
	if (Array.isArray(obj)) {
		return obj.map((val) => recurseWithObjFunction(val, objCheckFunction, objFunction));
	} else if (isObject(obj)) {
		obj = Object.entries(obj).reduce((acc, [key, value]) => {
			if (Array.isArray(value)) {
				return { ...acc, [key]: value.map((val) => recurseWithObjFunction(val, objCheckFunction, objFunction)) };
			} else if (isObject(value)) {
				if (objCheckFunction(value)) {
					return { ...acc, [key]: objFunction(value) };
				}
				return {
					...acc,
					[key]: recurseWithObjFunction(value, objCheckFunction, objFunction)
				};
			} else {
				return { ...acc, [key]: value };
			}
		}, {});
	} else {
		return obj;
	}
	return obj;
};

export const extractActionFromHttp = (request: Request) => {
	switch (request.method) {
		case 'GET':
			if (request.params.query) return AuditAction.query;
			else return AuditAction.read;
		case 'POST':
			if (request.params.query) return AuditAction.query;
			else return AuditAction.create;
		case 'PUT':
			return AuditAction.update;
		case 'DELETE':
			return AuditAction.delete;
		default:
			return AuditAction.read;
	}
};

export enum AuditAction {
	create = 'create',
	read = 'read',
	update = 'update',
	delete = 'delete',
	query = 'query'
}

export const getSubjectFromUrl = (url: string) => url.split('/').slice(-2).toString();

export const requestIsSuccess = (statusCode: number) => statusCode <= 400;

export function randomNumberGen(type: string) {
	if (type === 'dec') {
		const rand = Math.random();
		return rand.toFixed(1);
	} else if (type === 'int') {
		return Math.floor(Math.random() * 5) + 1;
	} else {
		throw new Error('random number gen type must be dec or int');
	}
}

export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

export function transformString(input: string): string {
	const words = input.split('_');

	const transformedWords = words.map((word) => {
		if (word.toUpperCase() === 'MDT' || word.toUpperCase() === 'FP10' || word.toUpperCase() === 'VAS') {
			return word.toUpperCase();
		}
		const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		return capitalizedWord;
	});

	return transformedWords.join(' ');
}

export const paginate = <T>(arr: T[], pageSize = 10): T[][] =>
	arr.reduce((acc, val, i) => {
		const idx = Math.floor(i / pageSize);
		const page = acc[idx] || (acc[idx] = [] as T[]);
		page.push(val);

		return acc;
	}, [] as T[][]);
