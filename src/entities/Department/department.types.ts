import { ICourse } from '@entities/Course/course.types'
import { IBase } from '@shared/config/base.interface'

export interface IDepartment extends IBase {
	id: number
	name: string
	courses: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
