import instance from '@shared/api/api.instance'
import { SERVICE_URL } from '@shared/config/enums.ts'

import { IDepartment, TypeDepartmentForm } from './department.types'

export const DepartmentService = {
	async create(data: TypeDepartmentForm) {
		return instance.post<IDepartment>(SERVICE_URL.DEPARTMENTS, data)
	},
	async getAll() {
		return instance.get<IDepartment[]>(SERVICE_URL.DEPARTMENTS)
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
