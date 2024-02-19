export interface IHealthGroup {
	id: number
	name: string
}

export type TypeHealthGroupForm = Omit<IHealthGroup, 'id'>
