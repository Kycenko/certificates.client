import { IStudent } from '@entities/Student/student.types'
import { IBase } from '@shared/config/base.interface'

export interface IGroup extends IBase {
	id: number
	name: string
	courseId: number | undefined
	students: IStudent[]
}

export type TypeGroupForm = Omit<IGroup, 'id'>
