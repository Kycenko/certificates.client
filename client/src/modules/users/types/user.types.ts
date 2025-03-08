export interface IUser {
	id: string
	login: string
	isAdmin: boolean
	groupId?: number | null
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
