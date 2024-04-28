import axios from 'axios'

import errorCatch from './api.error.ts'
import { BASE_URL } from '@/shared/constants/enums.ts'
import { getAccessToken, removeFromStorage } from '@/modules/auth/helpers/auth.helper.ts'
import { AuthService } from '@/modules/auth/services/auth.service.ts'

export const instance = axios.create({
	baseURL: BASE_URL.BASE_URL,
	headers: { 'Content-Type': 'application/json' }
})
instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired ' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeFromStorage()
				}
			}
		}

		throw error
	}
)

export default instance
