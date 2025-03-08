import { IStudent } from '../../students/types/student.types.ts'

import { ICourse } from '@/modules/courses/types/course.types.ts'

export interface IGroup {
	id: number
	name: string
	courseId: number | undefined
	students: IStudent[]
	course: ICourse
}

export type TypeGroupForm = Omit<IGroup, 'id'>
