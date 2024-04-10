import { IHealthGroup } from './health-group.types'
import { IPhysicalEducation } from './physical-education.types'
import { IBase } from '@/base/base.interface'

export interface IMedicalCertificateHistory extends IBase {
	id: number
	medicalCertificateId: string | number
	startDate: Date
	finishDate: Date
	healthGroupId: number
	healthGroup: IHealthGroup
	physicalEducationId: number
	physicalEducation: IPhysicalEducation
}

export type TypeMedicalCertificateHistoryForm = Omit<
	IMedicalCertificateHistory,
	'id'
>
