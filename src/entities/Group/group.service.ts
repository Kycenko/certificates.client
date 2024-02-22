import instance from '@shared/api/api.instance'
import { SERVICE_URL } from '@shared/config/enums.ts'

import { IGroup, TypeGroupForm } from './group.types'

export const GroupService = {
	async create(data: TypeGroupForm) {
		return instance.post<IGroup>(SERVICE_URL.GROUPS, data)
	},
	async getAll() {
		return instance.get<IGroup[]>(SERVICE_URL.GROUPS)
	},

	async getById(id: string | undefined) {
		return instance.get<IGroup>(`${SERVICE_URL.GROUPS}/${id}`)
	},

	async update(id: number | string, data: TypeGroupForm) {
		return instance.put<IGroup>(`${SERVICE_URL.GROUPS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IGroup>(`${SERVICE_URL.GROUPS}/${id}`)
	}
}
