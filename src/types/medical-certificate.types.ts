import { IBase } from '@/config/base.interface'

export interface IMedicalCertificate extends IBase {
	id: number
	startDate: Date
	finishDate: Date
	studentId: number | undefined
	healthGroupId: number
	physicalEducationId: number
}

export type TypeMedicalCertificateForm = Omit<IMedicalCertificate, 'id'>
