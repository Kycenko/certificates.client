import { errorCatch } from '.'
import { AuthService, getAccessToken, removeFromStorage } from '@shared/auth'
import { BASE_URL } from '@shared/config'
import axios from 'axios'

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
