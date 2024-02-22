import instance from '@shared/api/api.instance'
import { BASE_URL, SERVICE_URL, TOKENS } from '@shared/config/enums.ts'
import Cookies from 'js-cookie'

import { saveToStorage } from './auth.helper'
import { IAuthResponse, ILogin, IRegister } from './auth.types'

export const AuthService = {
	async login(data: ILogin) {
		const response = await instance.post<IAuthResponse>(
			`${SERVICE_URL.AUTH}/login`,
			data
		)
		if (response.data.accessToken) {
			saveToStorage(response.data)
			return response.data
		} else return undefined
	},
	async register(data: IRegister) {
		const response = await instance.post<IAuthResponse>(
			`${SERVICE_URL.AUTH}/register`,
			data
		)
		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(TOKENS.REFRESH_TOKEN)
		const response = await instance.post<IAuthResponse>(
			`${BASE_URL.BASE_URL} ${SERVICE_URL.AUTH_ACCESS_TOKEN}`,
			{ refreshToken }
		)
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	}
}
