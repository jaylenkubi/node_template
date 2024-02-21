



export const useAuthToken = () => {
	const authTokenKey = 'authToken'
	return [localStorage.getItem(authTokenKey), (token: string) => localStorage.setItem(authTokenKey, token)] as const
}