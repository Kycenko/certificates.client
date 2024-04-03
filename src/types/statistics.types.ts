import { ICourse } from './course.types'

export interface IGetDepartmentReport {
	id: number
	name: string
	courses: ICourse[]
}
