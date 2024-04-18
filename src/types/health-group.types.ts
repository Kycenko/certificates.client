import { IBase } from '@/lib/base/base.interface'

export interface IHealthGroup extends IBase {
	id: number
	name: string
}

export type TypeHealthGroupForm = Omit<IHealthGroup, 'id'>
