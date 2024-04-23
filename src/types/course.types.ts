import { IDepartment } from './department.types'
import { IGroup } from './group.types'
import { IBase } from '@/lib/base/base.interface'

export interface ICourse extends IBase {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
	department: IDepartment
}

export type TypeCourseForm = Omit<ICourse, 'id'>
