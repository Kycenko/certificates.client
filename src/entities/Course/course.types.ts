import { IGroup } from '@entities/Group'
import { IBase } from '@shared/config'

export interface ICourse extends IBase {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
}

export type TypeCourseForm = Omit<ICourse, 'id'>
