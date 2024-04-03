<<<<<<< HEAD:src/types/medical-certificate.types.ts
import { IBase } from '@/config/base.interface'
=======
import { IHealthGroup } from '@entities/HealthGroup'
import { IPhysicalEducation } from '@entities/PhysicalEducation'
import { IBase } from '@shared/config'
>>>>>>> 2f5ff3517175309caaa5c67a3f9e90183287eb2b:src/entities/MedicalCertificate/medical-certificate.types.ts

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
