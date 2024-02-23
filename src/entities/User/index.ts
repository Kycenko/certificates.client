import { IUser, TypeUserForm } from '@entities/User/user.types.ts'

import {
	useDeleteUser,
	useGetUser,
	useGetUsers,
	useUpdateUser
} from './user.queries'
import { UserService } from './user.service'

export { UserService, useDeleteUser, useGetUser, useGetUsers, useUpdateUser }

export type { IUser, TypeUserForm }
