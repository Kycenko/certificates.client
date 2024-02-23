import {
	useCreateCourse,
	useDeleteCourse,
	useGetCourse,
	useGetCourses,
	useUpdateCourse
} from './course.queries'
import { CourseService } from './course.service'
import { ICourse, TypeCourseForm } from './course.types'

export {
	CourseService,
	useCreateCourse,
	useDeleteCourse,
	useGetCourse,
	useGetCourses,
	useUpdateCourse
}

export type { ICourse, TypeCourseForm }
