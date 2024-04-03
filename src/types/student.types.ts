import { IBase } from '@/config/base.interface'

import { IMedicalCertificate } from './medical-certificate.types'

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
