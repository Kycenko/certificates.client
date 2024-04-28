import {
	saveToStorage,
	saveTokensToStorage
} from '@/modules/auth/helpers/auth.helper.ts'
import {
	IAuthResponse,
	ILogin,
	IRegister
} from '@/modules/auth/types/auth.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

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
		const response = await instance.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken)
			saveTokensToStorage(response.data.accessToken)

		return response
	}
}
