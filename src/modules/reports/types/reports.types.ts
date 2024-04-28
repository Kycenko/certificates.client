import { ICourse } from '@/modules/courses/types/course.types.ts'
import { IGroup } from '@/modules/groups/types/group.types.ts'
import { IMedicalCertificate } from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { IStudent } from '../../students/types/student.types.ts'

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
