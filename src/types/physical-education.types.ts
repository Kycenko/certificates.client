import { IBase } from '@/config/base.interface'

export interface IPhysicalEducation extends IBase {
	id: number
	name: string
}

export type TypePhysicalEducationForm = Omit<IPhysicalEducation, 'id'>