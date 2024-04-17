import { SERVICE_URL } from '@/constants/enums.ts'

import {
	IStudentHistory,
	TypeStudentHistoryForm
} from '@/types/student-history.types.ts'

import instance from '@/api/api.instance.ts'

export const StudentHistoryService = {
	async create(data: TypeStudentHistoryForm) {
		return instance.post<IStudentHistory>(
			`${SERVICE_URL.STUDENT_HISTORY}`,
			data
		)
	},

	async getAll(studentId: string | undefined) {
		return instance.get<IStudentHistory[]>(
			`${SERVICE_URL.STUDENT_HISTORY}/${studentId}`
		)
	}
}
