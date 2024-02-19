import { ICourse } from '@entities/Course/course.types'

export interface IDepartment {
	id: number
	name: string
	Course: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
