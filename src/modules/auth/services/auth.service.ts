import Cookies from 'js-cookie'

import { IAuthResponse, ILogin, IRegister } from '@/modules/auth/types/auth.types.ts'

import instance from '@/shared/api/api.instance.ts'
import { BASE_URL, SERVICE_URL, TOKENS } from '@/shared/constants/enums.ts'
import { saveToStorage } from '@/modules/auth/helpers/auth.helper.ts'

export const AuthService = {
	async login(data: ILogin) {
		const response = await instance.post<IAuthResponse>(
			`${SERVICE_URL.AUTH}/login`,
			data
		)
		if (response.data.accessToken) saveToStorage(response.data)

		return response
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
			BASE_URL.BASE_URL + SERVICE_URL.AUTH_ACCESS_TOKEN,
			{ refreshToken }
		)
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	}
}
