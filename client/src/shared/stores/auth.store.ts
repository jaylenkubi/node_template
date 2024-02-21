import {create} from "zustand";
import {UserType} from "@ui-services/models";
import {AXIOS_INSTANCE} from "@ui-services/custom-instance-ui.ts";

const tokenizeClient = (token: string) => {
	AXIOS_INSTANCE.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export type AuthStoreFields = {
	isAuthenticated: boolean
	firstName?: string
	lastName?: string
	email?: string
	userId?: number
	type?: UserType
}

type AuthStoreType = AuthStoreFields & {
	validateUser: (userDetails: Partial<AuthStoreFields> & { authToken: string }) => void
	invalidateUser: () => void
}

export const useAuthStore = create<AuthStoreType>((set) => ({
	userId: 0,
	firstName: '',
	lastName: '',
	email: '',
	type: UserType.CUSTOMER,
	isAuthenticated: false,
	validateUser:  ({userId, firstName, lastName, email, type, authToken}) => {
		tokenizeClient(authToken)
		set((state) => ({...state, userId, firstName, lastName, email, type, isAuthenticated: true}))
	},
	invalidateUser:  () => {
		set((state) => ({...state, userId: undefined, type: undefined, isAuthenticated: false}))
	},
}))