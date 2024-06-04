export {
	useCreateCourse,
	useDeleteCourse,
	useGetCourse,
	useGetCourses,
	useUpdateCourse
} from './api/course.queries'
export { CourseService } from './api/course.service'

export type { ICourse, TypeCourseForm } from './types/course.types'

export { CourseHeads, DetailsCourseHeads } from './components/course-heads'
