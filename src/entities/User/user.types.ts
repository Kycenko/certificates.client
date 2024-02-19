export interface IUser {
	id: string
	login: string
	isAdmin: boolean
	createdAt: Date
	updatedAt: Date
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
