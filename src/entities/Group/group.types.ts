import { IStudent } from '@entities/Student'
import { IBase } from '@shared/config'

export interface IGroup extends IBase {
	id: number
	name: string
	courseId: number | undefined
	students: IStudent[]
}

export type TypeGroupForm = Omit<IGroup, 'id'>
