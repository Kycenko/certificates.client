import { ICourse } from '@entities/Course'
import { IHealthGroup } from '@entities/HealthGroup/health-group.types'
import { IMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.types'

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
