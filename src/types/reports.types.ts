import { ICourse } from './course.types'
import { IStudent } from './student.types'

export interface IDepartmentReport {
	id: number
	name: string
	courses: ICourse[]
}

export interface IGroupReport {
	id: number
	name: string
	course: ICourse
	students: IStudent[]
}
