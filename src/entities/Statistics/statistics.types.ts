import { IStudent } from '@entities/Student/student.types'

export interface IStatistics {
	students: IStudent[]
	groupId: number
}
