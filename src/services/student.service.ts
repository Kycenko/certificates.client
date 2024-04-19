import {
	IStudent,
	IUploadStudent,
	TypeStudentForm,
	TypeUploadStudentForm
} from '@/types/student.types'

import instance from '@/lib/api/api.instance'
import { SERVICE_URL } from '@/lib/constants/enums'

export const StudentService = {
	async upload(data: TypeUploadStudentForm[]) {
		return instance.post<IUploadStudent[]>(
			`${SERVICE_URL.STUDENTS}/import`,
			data,
			{
				headers: { 'Content-Type': 'multipart/form-data' }
			}
		)
	},

	async create(data: TypeStudentForm) {
		return instance.post<IStudent>(SERVICE_URL.STUDENTS, data)
	},
	async getAll(groupName?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		const url = groupName
			? `${SERVICE_URL.STUDENTS}?group=${groupName}&sort=${sortOrder}`
			: `${SERVICE_URL.STUDENTS}?sort=${sortOrder}`

		return instance.get<IStudent[]>(url)
	},

	async getById(id: string | undefined) {
		return instance.get<IStudent>(`${SERVICE_URL.STUDENTS}/${id}`)
	},

	async update(id: number | string, data: TypeStudentForm) {
		return instance.patch<IStudent>(`${SERVICE_URL.STUDENTS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IStudent>(`${SERVICE_URL.STUDENTS}/${id}`)
	}
}
