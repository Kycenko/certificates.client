import {
	IStudentHistory,
	TypeStudentHistoryForm
} from '@/types/student-history.types.ts'

import instance from '@/lib/api/api.instance.ts'
import { SERVICE_URL } from '@/lib/constants/enums.ts'

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
