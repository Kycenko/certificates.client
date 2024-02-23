import { IMedicalCertificate } from '@entities/MedicalCertificate'
import { IBase } from '@shared/config'

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
