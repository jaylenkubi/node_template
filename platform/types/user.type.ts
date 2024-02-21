import {BaseDbType} from "./base.db.type";

export enum UserType {
	ADMIN = 'ADMIN',
	CUSTOMER = 'CUSTOMER',
	GUEST = 'GUEST'
}

export enum TitleType {
	MR = 'Mr',
	MRS = 'Mrs',
	MISS = 'Miss',
	MS = 'Ms',
	DR = 'Dr',
	PROF = 'Prof'
}


export type UserInterface = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string;
	title?: TitleType;
	password: string;
	type: UserType;
}

export type UserEntityType = UserInterface & BaseDbType
