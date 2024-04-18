import { IHealthGroup } from './health-group.types'
import { IPhysicalEducation } from './physical-education.types'
import { IBase } from '@/lib/base/base.interface'

export interface IMedicalCertificate extends IBase {
	id: number
	startDate: Date
	finishDate: Date
	studentId: number | undefined
	healthGroupId: number
	physicalEducationId: number
	healthGroup: IHealthGroup
	physicalEducation: IPhysicalEducation
}

export type TypeMedicalCertificateForm = Omit<IMedicalCertificate, 'id'>
