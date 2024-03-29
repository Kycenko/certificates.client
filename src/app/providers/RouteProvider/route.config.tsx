import { CourseDetailsPage, CoursesPage } from '@pages/CoursesPage'
import { DepartmentDetailsPage, DepartmentsPage } from '@pages/DepartmentsPage'
import { GroupDetailsPage, GroupsPage } from '@pages/GroupsPage'
import { HealthGroupsPage } from '@pages/HealthGroupsPage'
import { HomePage } from '@pages/HomePage'
import { LoginPage } from '@pages/Login'
import { MedicalCertificatesPage } from '@pages/MedicalCertificatesPage'
import { PhysicalEducationPage } from '@pages/PhysicalEducationsPage'
import GetStudentsCertificates from '@pages/StatisticsPage/GetStudentsCertificates'
import GetStudentsCertificatesWithDepartment from '@pages/StatisticsPage/GetStudentsCertificatesWithDepartment'
import { StudentsPage } from '@pages/StudentsPage'
import StudentDetailsPage from '@pages/StudentsPage/StudentDetailsPage'
import { UserDetailsPage, UsersPage } from '@pages/UsersPage'
import { RouteProps } from 'react-router-dom'

export const enum AppRoutes {
	LOGIN = 'login',
	HOME = 'home',
	USERS = 'users',
	USER_DETAILS = 'user-details',
	HEALTH_GROUPS = 'health-groups',
	PHYSICAL_EDUCATION = 'physical-education',
	DEPARTMENTS = 'departments',
	DEPARTMENT_DETAILS = 'department-details',
	COURSES = 'courses',
	COURSE_DETAILS = 'course-details',
	GROUPS = 'groups',
	GROUP_DETAILS = 'group-details',
	STUDENTS = 'students',
	STUDENT_DETAILS = 'student-details',
	MEDICAL_CERTIFICATES = 'medical-certificates',
	GET_STUDENTS_CERTIFICATES = 'statistics-certificates-info',
	GET_STUDENTS_CERTIFICATES_WITH_DEPARTMENT = 'statistics-certificates-with-department-info'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.HOME]: '/',
	[AppRoutes.USERS]: '/users',
	[AppRoutes.USER_DETAILS]: '/users/:id',
	[AppRoutes.HEALTH_GROUPS]: '/health-groups',
	[AppRoutes.PHYSICAL_EDUCATION]: '/physical-educations',
	[AppRoutes.DEPARTMENTS]: '/departments',
	[AppRoutes.DEPARTMENT_DETAILS]: '/departments/:id',
	[AppRoutes.COURSES]: '/courses',
	[AppRoutes.COURSE_DETAILS]: '/courses/:id',
	[AppRoutes.GROUPS]: '/groups',
	[AppRoutes.GROUP_DETAILS]: '/groups/:id',
	[AppRoutes.STUDENTS]: '/students',
	[AppRoutes.STUDENT_DETAILS]: '/students/:id',
	[AppRoutes.MEDICAL_CERTIFICATES]: '/medical-certificates',
	[AppRoutes.GET_STUDENTS_CERTIFICATES]: '/statistics/certificates-info/:id',
	[AppRoutes.GET_STUDENTS_CERTIFICATES_WITH_DEPARTMENT]:
		'/statistics/certificates-with-department-info/:id'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPage />
	},
	[AppRoutes.HOME]: {
		path: RoutePath.home,
		element: <HomePage />
	},
	[AppRoutes.USERS]: {
		path: RoutePath.users,
		element: <UsersPage />
	},
	[AppRoutes.USER_DETAILS]: {
		path: RoutePath['user-details'],
		element: <UserDetailsPage />
	},
	[AppRoutes.HEALTH_GROUPS]: {
		path: RoutePath['health-groups'],
		element: <HealthGroupsPage />
	},
	[AppRoutes.PHYSICAL_EDUCATION]: {
		path: RoutePath['physical-education'],
		element: <PhysicalEducationPage />
	},
	[AppRoutes.DEPARTMENTS]: {
		path: RoutePath.departments,
		element: <DepartmentsPage />
	},
	[AppRoutes.DEPARTMENT_DETAILS]: {
		path: RoutePath['department-details'],
		element: <DepartmentDetailsPage />
	},
	[AppRoutes.COURSES]: {
		path: RoutePath.courses,
		element: <CoursesPage />
	},
	[AppRoutes.COURSE_DETAILS]: {
		path: RoutePath['course-details'],
		element: <CourseDetailsPage />
	},
	[AppRoutes.GROUPS]: {
		path: RoutePath.groups,
		element: <GroupsPage />
	},
	[AppRoutes.GROUP_DETAILS]: {
		path: RoutePath['group-details'],
		element: <GroupDetailsPage />
	},
	[AppRoutes.STUDENTS]: {
		path: RoutePath.students,
		element: <StudentsPage />
	},
	[AppRoutes.STUDENT_DETAILS]: {
		path: RoutePath['student-details'],
		element: <StudentDetailsPage />
	},
	[AppRoutes.MEDICAL_CERTIFICATES]: {
		path: RoutePath['medical-certificates'],
		element: <MedicalCertificatesPage />
	},
	[AppRoutes.GET_STUDENTS_CERTIFICATES]: {
		path: RoutePath['statistics-certificates-info'],
		element: <GetStudentsCertificates />
	},
	[AppRoutes.GET_STUDENTS_CERTIFICATES_WITH_DEPARTMENT]: {
		path: RoutePath['statistics-certificates-with-department-info'],
		element: <GetStudentsCertificatesWithDepartment />
	}
}
