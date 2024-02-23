import { IUser } from '@entities/User'

export interface ILogin {
	login: string
	password: string
}

export interface IRegister {
	login: string
	password: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
