import {
	useCreateStudent,
	useDeleteStudent,
	useGetStudent,
	useGetStudents,
	useUpdateStudent
} from './student.queries'
import { StudentService } from './student.service'
import { IStudent, TypeStudentForm } from './student.types'

export {
	StudentService,
	useCreateStudent,
	useDeleteStudent,
	useGetStudent,
	useGetStudents,
	useUpdateStudent
}
export type { IStudent, TypeStudentForm }
