import { SERVICE_URL } from '@/constants/enums'

import { ICourse, TypeCourseForm } from '@/types/course.types'

import instance from '@/api/api.instance'

export const CourseService = {
	async create(data: TypeCourseForm) {
		return instance.post<ICourse>(SERVICE_URL.COURSES, data)
	},
	async getAll() {
		return instance.get<ICourse[]>(SERVICE_URL.COURSES)
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
