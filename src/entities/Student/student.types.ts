import { IMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.types'

export interface IStudent {
	id: number
	name: string
	surname: string
	birthDate: Date
	secondName: string
	groupId: number
	medicalCertificates: IMedicalCertificate[]
}

export type TypeStudentForm = Omit<IStudent, 'id'>
