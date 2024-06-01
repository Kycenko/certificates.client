import { IDepartment } from '../../departments/types/department.types.ts'
import { IGroup } from '../../groups/types/group.types.ts'

export interface ICourse {
	id: number
	number: number
	departmentId: number | undefined
	groups: IGroup[]
	department: IDepartment
}

export type TypeCourseForm = Omit<ICourse, 'id'>
