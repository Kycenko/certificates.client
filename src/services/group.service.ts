import { SERVICE_URL } from '@/constants/enums'

import { IGroup, TypeGroupForm } from '@/types/group.types'

import instance from '@/api/api.instance'

export const GroupService = {
	async create(data: TypeGroupForm) {
		return instance.post<IGroup>(SERVICE_URL.GROUPS, data)
	},
	async getAll(course?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		const url = course
			? `${SERVICE_URL.GROUPS}?course=${course}&sort=${sortOrder}`
			: `${SERVICE_URL.GROUPS}?sort=${sortOrder}`
		return instance.get<IGroup[]>(url)
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
