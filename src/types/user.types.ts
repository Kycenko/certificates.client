import { IBase } from '@/lib/base/base.interface'

export interface IUser extends IBase {
	id: string
	login: string
	isAdmin: boolean
	groupId?: number | null
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
