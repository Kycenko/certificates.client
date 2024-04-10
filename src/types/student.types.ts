import { IMedicalCertificate } from './medical-certificate.types'
import { IBase } from '@/base/base.interface'

export interface IStudent extends IBase {
	id: number
	name: string
	surname: string
	birthDate: Date
	secondName: string
	groupId: number | undefined
	isExpelled: boolean
	medicalCertificates: IMedicalCertificate[]
}

export type TypeStudentForm = Omit<IStudent, 'id'>
