import { SERVICE_URL } from '@/constants/enums'

import { IDepartment, TypeDepartmentForm } from '@/types/department.types'

import instance from '@/api/api.instance'

export const DepartmentService = {
	async create(data: TypeDepartmentForm) {
		return instance.post<IDepartment>(SERVICE_URL.DEPARTMENTS, data)
	},
	async getAll(departmentName?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		const url = departmentName
			? `${SERVICE_URL.DEPARTMENTS}?name=${departmentName}&sort=${sortOrder}`
			: `${SERVICE_URL.DEPARTMENTS}?sort=${sortOrder}`
		return instance.get<IDepartment[]>(url)
	},

	async getById(id: string | undefined) {
		return instance.get<IDepartment>(`${SERVICE_URL.DEPARTMENTS}/${id}`)
	},

	async update(id: number | string, data: TypeDepartmentForm) {
		return instance.put<IDepartment>(`${SERVICE_URL.DEPARTMENTS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IDepartment>(`${SERVICE_URL.DEPARTMENTS}/${id}`)
	}
}
