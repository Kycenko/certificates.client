import { IGroup } from '@/modules/groups/types/group.types.ts'
import { IMedicalCertificate } from '@/modules/medical-certificates/types/medical-certificate.types.ts'

export interface IStudent {
	id: number
	name: string
	surname: string
	birthDate: Date
	secondName?: string
	groupId?: number
	group?: IGroup
	isExpelled?: boolean
	medicalCertificates: IMedicalCertificate[]
}

export interface IUploadStudent {
	id: number
	surname: string
	name: string
	secondName?: string
	birthDate: Date
}

export type TypeStudentForm = Omit<IStudent, 'id'>
export type TypeUploadStudentForm = Omit<IUploadStudent, 'id'>
