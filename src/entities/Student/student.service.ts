import { TypeStudentForm } from '@entities/Student/student.types'
import instance from '@shared/api/api.instance'
import { SERVICE_URL } from '@shared/config/enums.ts'
import { IStudent } from './student.types'

export const StudentService = {
	async create(data: TypeStudentForm) {
		return instance.post<IStudent>(SERVICE_URL.STUDENTS, data)
	},
	async getAll() {
		return instance.get<IStudent[]>(SERVICE_URL.STUDENTS)
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
