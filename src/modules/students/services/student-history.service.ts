import {
	IStudentHistory,
	TypeStudentHistoryForm
} from '@/modules/students/types/student-history.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

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
