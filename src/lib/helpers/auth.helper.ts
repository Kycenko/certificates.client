import Cookies from 'js-cookie'

import { LOCAL_STORAGE_KEY, TOKENS } from '@/constants/enums.ts'

import { IAuthResponse, ITokens } from '@/types/auth.types.ts'

export const getAccessToken = async () => {
	const accessToken = Cookies.get(TOKENS.ACCESS_TOKEN)

	return accessToken || null
}

export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.USER) || '{}')
}

export const saveTokensToStorage = (data: ITokens) => {
	Cookies.set(TOKENS.ACCESS_TOKEN, data.accessToken)
	Cookies.set(TOKENS.REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(TOKENS.ACCESS_TOKEN)
	localStorage.removeItem(LOCAL_STORAGE_KEY.USER)
}
export const saveToStorage = (data: IAuthResponse) => {
	saveTokensToStorage(data)
	localStorage.setItem(LOCAL_STORAGE_KEY.USER, JSON.stringify(data.user))
}
