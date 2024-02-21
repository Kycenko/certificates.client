import { instance } from '@shared/api'
import { SERVICE_URL } from '@shared/config/enums'

import { IUser, TypeUserForm } from './user.types'

export const UserService = {
	async getAll() {
		return instance.get<IUser[]>(SERVICE_URL.USERS)
	},

	async getById(id: string | undefined) {
		return instance.get<IUser>(`${SERVICE_URL.USERS}/${id}`)
	},

	async getProfile() {
		return instance.get<IUser>(`${SERVICE_URL.USERS}/profile`)
	},

	async update(id: string | undefined, data: TypeUserForm) {
		return instance.patch<IUser>(`${SERVICE_URL.USERS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IUser>(`${SERVICE_URL.USERS}/${id}`)
	}
}
