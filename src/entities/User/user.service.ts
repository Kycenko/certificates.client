import { IUser, TypeUserForm } from '.'
import { instance } from '@shared/api'
import { SERVICE_URL } from '@shared/config'

export const UserService = {
	async getAll() {
		return instance.get<IUser[]>(SERVICE_URL.USERS)
	},

	async getById(id: string | undefined) {
		return instance.get<IUser>(`${SERVICE_URL.USERS}/${id}`)
	},

	// async getProfile(id: string | undefined) {
	// 	return instance.get<IUser>(`${SERVICE_URL.PROFILE}/${id}`)
	// },

	async update(id: string | undefined, data: TypeUserForm) {
		return instance.patch<IUser>(`${SERVICE_URL.USERS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IUser>(`${SERVICE_URL.USERS}/${id}`)
	}
}
