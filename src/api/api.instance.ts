import axios from 'axios'

import { BASE_URL } from '@/constants/enums'

import errorCatch from './api.error'
import { getAccessToken, removeFromStorage } from '@/lib/helpers/auth.helper.ts'
import { AuthService } from '@/services/auth.service'


export const instance = axios.create({
	baseURL: BASE_URL.BASE_URL,
	headers: { 'Content-Type': 'application/json' }
})
instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	// if (!config.headers.Authorization || !accessToken) {
	// 	throw new Error()
	// }

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
