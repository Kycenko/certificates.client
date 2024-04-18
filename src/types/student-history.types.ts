import { IGroup } from './group.types'
import { IStudent } from './student.types'
import { IBase } from '@/lib/base/base.interface.ts'

export interface IStudentHistory extends IBase {
	id: number
	studentId: number
	student: IStudent
	groupId?: number
	group: IGroup
}

export type TypeStudentHistoryForm = Omit<IStudentHistory, 'id'>
