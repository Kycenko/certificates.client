import { IStudent } from './student.types'
import { IBase } from '@/lib/base/base.interface'

export interface IGroup extends IBase {
	id: number
	name: string
	courseId: number | undefined
	students: IStudent[]
}

export type TypeGroupForm = Omit<IGroup, 'id'>
