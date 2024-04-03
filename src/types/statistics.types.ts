<<<<<<< HEAD:src/types/statistics.types.ts
import { IHealthGroup } from './health-group.types'
import { IMedicalCertificate } from './medical-certificate.types'
=======
import { ICourse } from '@entities/Course'
import { IHealthGroup } from '@entities/HealthGroup/health-group.types'
import { IMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.types'
>>>>>>> 2f5ff3517175309caaa5c67a3f9e90183287eb2b:src/entities/Statistics/statistics.types.ts

export interface IHealthReportResponse {
	healthGroup: IHealthGroup[]
	medicalCertificates: IMedicalCertificate[]
}

export interface IGetStatisticsByStudentsCertificates {
	id: number
	name: string
	courses: ICourse[]
}
export interface IGetStatisticsByStudentsCertificatesWithGroups {
	id: number
	name: string
	courses: ICourse[]
}
