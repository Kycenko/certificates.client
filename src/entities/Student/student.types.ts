import { IMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.types'
import { IBase } from '@shared/config/base.interface'

export interface IStudent extends IBase {
	id: number
	name: string
	surname: string
	birthDate: Date
	secondName: string
	groupId: number | undefined
	medicalCertificates: IMedicalCertificate[]
}

export type TypeStudentForm = Omit<IStudent, 'id'>
