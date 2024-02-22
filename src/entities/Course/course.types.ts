import { IGroup } from '@entities/Group/group.types'
import { IBase } from '@shared/config/base.interface'

export interface ICourse extends IBase {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
}

export type TypeCourseForm = Omit<ICourse, 'id'>
