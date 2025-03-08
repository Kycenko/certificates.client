import { IGroup } from '@/modules/groups/types/group.types.ts'
import { IStudent } from '@/modules/students/types/student.types.ts'

export interface IStudentHistory {
	id: number
	studentId: number
	student: IStudent
	groupId?: number
	group: IGroup
	createdAt: Date
}

export type TypeStudentHistoryForm = Omit<IStudentHistory, 'id'>
