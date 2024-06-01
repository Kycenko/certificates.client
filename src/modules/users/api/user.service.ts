import { IUser, TypeUserForm } from '@/modules/users/types/user.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

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
