import {BaseDbType} from "./base.db.type";

export enum Type {
	ADMIN = 'ADMIN'
}

export enum TitleType {
	MR = 'Mr',
	MRS = 'Mrs',
	MISS = 'Miss',
	MS = 'Ms',
	DR = 'Dr',
	PROF = 'Prof'
}

export type UserType = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string;
	title?: TitleType;
	password: string;
	type: Type;
}

export type UserEntityType = UserType & BaseDbType
