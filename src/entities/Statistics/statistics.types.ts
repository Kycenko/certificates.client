import { IHealthGroup } from '@entities/HealthGroup/health-group.types'
import { IMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.types'

export interface IHealthReportResponse {
	healthGroup: IHealthGroup[]
	medicalCertificates: IMedicalCertificate[]
}

export interface IGetStatisticsByStudentsCertificates {}
