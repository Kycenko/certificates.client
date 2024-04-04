import { IGroup } from './group.types'
import { IBase } from '@/base/base.interface'

export interface ICourse extends IBase {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
}

export type TypeCourseForm = Omit<ICourse, 'id'>
