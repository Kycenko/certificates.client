import { IHealthGroup } from './health-group.types'
import { IMedicalCertificate } from './medical-certificate.types'

export interface IHealthReportResponse {
	healthGroup: IHealthGroup[]
	medicalCertificates: IMedicalCertificate[]
}

export interface IGetStatisticsByStudentsCertificates {}
