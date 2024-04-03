import { IBase } from '@/config/base.interface'

import { IStudent } from './student.types'

export interface IGroup extends IBase {
	id: number
	name: string
	courseId: number | undefined
	students: IStudent[]
}

export type TypeGroupForm = Omit<IGroup, 'id'>
