import { IBase } from '@/config/base.interface'

import { ICourse } from './course.types'

export interface IDepartment extends IBase {
	id: number
	name: string
	courses: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
