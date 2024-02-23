import { ICourse } from '@entities/Course'
import { IBase } from '@shared/config'

export interface IDepartment extends IBase {
	id: number
	name: string
	courses: ICourse[]
}

export type TypeDepartmentForm = Omit<IDepartment, 'id'>
