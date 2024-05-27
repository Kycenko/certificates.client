import {IGroup, TypeGroupForm} from '@/modules/groups/types/group.types.ts'
import instance from '@/shared/api/api.instance.ts'
import {SERVICE_URL} from '@/shared/constants/enums.ts'

export const GroupService = {
	async create(data: TypeGroupForm) {
		return instance.post<IGroup>(SERVICE_URL.GROUPS, data)
	},
	async getAll(
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: string
	) {
		const departmentParam = department ? `&department=${department}` : ''
		const courseParam = course ? `&course=${course}` : ''
		return instance.get<IGroup[]>(
			`${SERVICE_URL.GROUPS}?sort=${sortOrder}${departmentParam}${courseParam}`
		)
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
