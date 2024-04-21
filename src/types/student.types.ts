import { IGroup } from './group.types'
import { IMedicalCertificate } from './medical-certificate.types'
import { IBase } from '@/lib/base/base.interface'

export interface IStudent extends IBase {
	id: number
	name: string
	surname?: string
	birthDate: Date
	secondName: string
	groupId?: number | undefined
	group?: IGroup
	isExpelled?: boolean
	medicalCertificates: IMedicalCertificate[]
}

export interface IUploadStudent extends IBase {
	id: number
	surname: string
	name: string
	secondName: string
	birthDate: Date
}

export type TypeStudentForm = Omit<IStudent, 'id'>
export type TypeUploadStudentForm = Omit<IUploadStudent, 'id'>
