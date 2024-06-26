import {
	ICourse,
	TypeCourseForm
} from '@/modules/courses/types/course.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

export const CourseService = {
	async create(data: TypeCourseForm) {
		return instance.post<ICourse>(SERVICE_URL.COURSES, data)
	},
	async getAll(departmentName?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		const url = departmentName
			? `${SERVICE_URL.COURSES}?department=${departmentName}&sort=${sortOrder}`
			: `${SERVICE_URL.COURSES}?sort=${sortOrder}`
		return instance.get<ICourse[]>(url)
	},

	async getById(id: string | undefined) {
		return instance.get<ICourse>(`${SERVICE_URL.COURSES}/${id}`)
	},

	async update(id: number | string, data: TypeCourseForm) {
		return instance.put<ICourse>(`${SERVICE_URL.COURSES}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<ICourse>(`${SERVICE_URL.COURSES}/${id}`)
	}
}
