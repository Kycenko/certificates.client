import { RouteProps } from 'react-router-dom'

import CourseDetailsPage from '@/pages/CoursesPage/CourseDetailsPage'
import CoursesPage from '@/pages/CoursesPage/CoursesPage'
import DepartmentDetailsPage from '@/pages/DepartmentsPage/DepartmentDetailsPage'
import DepartmentsPage from '@/pages/DepartmentsPage/DepartmentsPage'
import GroupDetailsPage from '@/pages/GroupsPage/GroupDetailsPage'
import GroupsPage from '@/pages/GroupsPage/GroupsPage'
import HealthGroupsPage from '@/pages/HealthGroupsPage/HealthGroupsPage'
import HomePage from '@/pages/HomePage/HomePage'
import LoginPage from '@/pages/Login/LoginPage'
import MedicalCertificatesPage from '@/pages/MedicalCertificatesPage/MedicalCertificatesPage'
import PhysicalEducationPage from '@/pages/PhysicalEducationsPage/PhysicalEducationsPage'
import GetDepartmentReportPage from '@/pages/StatisticsPage/GetDepartmentReportPage'
import StudentDetailsPage from '@/pages/StudentsPage/StudentDetailsPage'
import StudentHistoryPage from '@/pages/StudentsPage/StudentHistoryPage.tsx'
import StudentsPage from '@/pages/StudentsPage/StudentsPage'
import UserDetailsPage from '@/pages/UsersPage/UserDetailsPage'
import UsersPage from '@/pages/UsersPage/UsersPage'


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
	STUDENT_HISTORY = 'student-history',
	MEDICAL_CERTIFICATES = 'medical-certificates',
	GET_DEPARTMENT_REPORT = 'department-report'
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
	[AppRoutes.STUDENT_HISTORY]: '/students/history/:id',
	[AppRoutes.MEDICAL_CERTIFICATES]: '/medical-certificates',
	[AppRoutes.GET_DEPARTMENT_REPORT]: '/statistics/department-report/:id'
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
	[AppRoutes.STUDENT_HISTORY]: {
		path: RoutePath['student-history'],
		element: <StudentHistoryPage />
	},
	[AppRoutes.STUDENT_DETAILS]: {
		path: RoutePath['student-details'],
		element: <StudentDetailsPage />
	},
	[AppRoutes.MEDICAL_CERTIFICATES]: {
		path: RoutePath['medical-certificates'],
		element: <MedicalCertificatesPage />
	},
	[AppRoutes.GET_DEPARTMENT_REPORT]: {
		path: RoutePath['department-report'],
		element: <GetDepartmentReportPage />
	}
}
