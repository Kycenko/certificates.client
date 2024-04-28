import { IPhysicalEducation } from '../../physical-educations/types/physical-education.types.ts'
import { IStudent } from '../../students/types/student.types.ts'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types.ts'

export interface IMedicalCertificate {
	id: number
	startDate: Date
	finishDate: Date
	studentId: number | undefined
	healthGroupId: number
	physicalEducationId: number
	healthGroup: IHealthGroup
	physicalEducation: IPhysicalEducation
	student: IStudent
}

export type TypeMedicalCertificateForm = Omit<IMedicalCertificate, 'id'>
