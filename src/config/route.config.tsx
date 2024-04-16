import { RouteProps } from 'react-router-dom'

import CourseDetailsPage from '@/pages/Courses/CourseDetailsPage'
import CoursesPage from '@/pages/Courses/CoursesPage'
import DepartmentDetailsPage from '@/pages/Departments/DepartmentDetailsPage'
import DepartmentsPage from '@/pages/Departments/DepartmentsPage'
import GroupDetailsPage from '@/pages/Groups/GroupDetailsPage'
import GroupsPage from '@/pages/Groups/GroupsPage'
import HealthGroupsPage from '@/pages/HealthGroups/HealthGroupsPage'
import HomePage from '@/pages/Home/HomePage'
import LoginPage from '@/pages/Login/LoginPage'
import MedicalCertificateHistoryPage from '@/pages/MedicalCertificates/MedicalCertificateHistoryPage'
import MedicalCertificatesPage from '@/pages/MedicalCertificates/MedicalCertificatesPage'
import PhysicalEducationPage from '@/pages/PhysicalEducations/PhysicalEducationsPage'
import GetDepartmentReportPage from '@/pages/Reports/GetDepartmentReportPage'
import GetGroupReportPage from '@/pages/Reports/GetGroupReportPage'
import StudentDetailsPage from '@/pages/Students/StudentDetailsPage'
import StudentHistoryPage from '@/pages/Students/StudentHistoryPage'
import StudentsPage from '@/pages/Students/StudentsPage'
import UserDetailsPage from '@/pages/Users/UserDetailsPage'
import UsersPage from '@/pages/Users/UsersPage'

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

	STUDENT_HISTORY = 'student-history',
	STUDENT_DETAILS = 'student-details',
	MEDICAL_CERTIFICATES = 'medical-certificates',
	MEDICAL_CERTIFICATE_HISTORY = 'medical-certificate-history',
	GET_DEPARTMENT_REPORT = 'department-report',
	GET_GROUP_REPORT = 'group-report'
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

	[AppRoutes.STUDENT_HISTORY]: '/student-history/:id',
	[AppRoutes.STUDENT_DETAILS]: '/students/:id',
	[AppRoutes.MEDICAL_CERTIFICATES]: '/medical-certificates',
	[AppRoutes.MEDICAL_CERTIFICATE_HISTORY]: '/medical-certificate-history/:id',
	[AppRoutes.GET_DEPARTMENT_REPORT]: '/reports/department-report/:id',
	[AppRoutes.GET_GROUP_REPORT]: '/reports/group-report/:id'
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
	[AppRoutes.MEDICAL_CERTIFICATE_HISTORY]: {
		path: RoutePath['medical-certificate-history'],
		element: <MedicalCertificateHistoryPage />
	},
	[AppRoutes.GET_DEPARTMENT_REPORT]: {
		path: RoutePath['department-report'],
		element: <GetDepartmentReportPage />
	},
	[AppRoutes.GET_GROUP_REPORT]: {
		path: RoutePath['group-report'],
		element: <GetGroupReportPage />
	}
}
