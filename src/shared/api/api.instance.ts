import axios from 'axios'

import errorCatch from './api.error.ts'
import { AuthService } from '@/modules/auth/api/auth.service.ts'
import { BASE_URL } from '@/shared/constants/enums.ts'
import {
	getAccessToken,
	removeFromStorage
} from '@/shared/helpers/auth.helper.ts'

export const instance = axios.create({
	baseURL: BASE_URL.BASE_URL,
	headers: { 'Content-Type': 'application/json' }
})
instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

let retryCount = 0

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired ' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry &&
			retryCount < 2
		) {
			originalRequest._isRetry = true
			retryCount += 1

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
