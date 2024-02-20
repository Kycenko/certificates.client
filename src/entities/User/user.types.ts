export interface IUser {
	id: string
	login: string
	isAdmin: boolean
	createdAt: Date
	updatedAt: Date
	groupId?: number | null
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
