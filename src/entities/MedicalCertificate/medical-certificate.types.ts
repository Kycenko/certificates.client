import { IHealthGroup } from '@entities/HealthGroup'
import { IPhysicalEducation } from '@entities/PhysicalEducation'
import { IBase } from '@shared/config'

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
