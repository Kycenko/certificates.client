import { IBase } from '@shared/config'

export interface IPhysicalEducation extends IBase {
	id: number
	name: string
}

export type TypePhysicalEducationForm = Omit<IPhysicalEducation, 'id'>
