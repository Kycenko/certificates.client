import { IStudent } from '@entities/Student/student.types'

export interface IGroup {
	id: number
	name: string
	courseId: number | undefined
	userId: number | null
	students: IStudent[]
}

export type TypeGroupForm = Omit<IGroup, 'id'>
