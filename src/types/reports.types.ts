import { ICourse } from './course.types'
import { IGroup } from './group.types'
import { IMedicalCertificate } from './medical-certificate.types'
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

export interface IHealthReport {
	id: number
	name: string
	courses: ICourse[]
	groups: IGroup[]
	students: IStudent[]
	certificates: IMedicalCertificate[]
}
