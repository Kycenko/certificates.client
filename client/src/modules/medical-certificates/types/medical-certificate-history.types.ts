import { IPhysicalEducation } from '../../physical-educations/types/physical-education.types.ts'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types.ts'

export interface IMedicalCertificateHistory {
	id: number
	medicalCertificateId: string | number
	startDate: Date
	finishDate: Date
	healthGroupId: number
	healthGroup: IHealthGroup
	physicalEducationId: number
	physicalEducation: IPhysicalEducation
	createdAt: Date
}

export type TypeMedicalCertificateHistoryForm = Omit<
	IMedicalCertificateHistory,
	'id'
>
