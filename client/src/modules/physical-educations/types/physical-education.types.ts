export interface IPhysicalEducation {
	id: number
	name: string
}

export type TypePhysicalEducationForm = Omit<IPhysicalEducation, 'id'>
