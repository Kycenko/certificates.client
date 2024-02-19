import { IGroup } from '@entities/Group/group.types'

export interface ICourse {
	id: number
	number: number
	departmentId: number
	groups: IGroup[]
}

export type TypeCourseForm = Omit<ICourse, 'id'>
