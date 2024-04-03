import { IBase } from '@/config/base.interface'

import { IGroup } from './group.types'

export interface ICourse extends IBase {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
}

export type TypeCourseForm = Omit<ICourse, 'id'>
