import { ICourse } from './course.types'
import { IBase } from '@/base/base.interface'

export interface IDepartment extends IBase {
	id: number
	name: string
	courses: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
