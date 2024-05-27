import {ICourse} from '@/modules/courses/types/course.types.ts'

export interface IDepartment {
	id: number
	name: string
	courses: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
