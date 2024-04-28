import {
	IStudent,
	IUploadStudent,
	TypeStudentForm,
	TypeUploadStudentForm
} from '@/modules/students/types/student.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

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
	async getAll(
		groupName?: string,
		sortOrder: 'asc' | 'desc' = 'asc',
		page: number = 1
	) {
		const url = groupName
			? `${SERVICE_URL.STUDENTS}?group=${groupName}&sort=${sortOrder}&page=${page}`
			: `${SERVICE_URL.STUDENTS}?sort=${sortOrder}&page=${page}`

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