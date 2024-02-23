import {
	getAccessToken,
	getUserFromStorage,
	removeFromStorage,
	saveToStorage,
	saveTokensToStorage
} from './auth.helper'
import { useLogin, useRegister } from './auth.queries'
import { AuthService } from './auth.service'
import { IAuthResponse, ILogin, IRegister, ITokens } from './auth.types'

export {
	AuthService,
	getAccessToken,
	getUserFromStorage,
	removeFromStorage,
	saveToStorage,
	saveTokensToStorage,
	useLogin,
	useRegister
}
export type { IAuthResponse, ILogin, IRegister, ITokens }
