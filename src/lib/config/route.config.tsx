import { RouteProps } from 'react-router-dom'

import CourseDetailsPage from '@/pages/Courses/CourseDetailsPage.tsx'
import CoursesPage from '@/pages/Courses/CoursesPage.tsx'
import DepartmentDetailsPage from '@/pages/Departments/DepartmentDetailsPage.tsx'
import DepartmentsPage from '@/pages/Departments/DepartmentsPage.tsx'
import GroupDetailsPage from '@/pages/Groups/GroupDetailsPage.tsx'
import GroupsPage from '@/pages/Groups/GroupsPage.tsx'
import HealthGroupsPage from '@/pages/HealthGroups/HealthGroupsPage.tsx'
import HomePage from '@/pages/Home/HomePage.tsx'
import LoginPage from '@/pages/Login/LoginPage.tsx'
import MedicalCertificateHistoryPage from '@/pages/MedicalCertificates/MedicalCertificateHistoryPage.tsx'
import MedicalCertificatesPage from '@/pages/MedicalCertificates/MedicalCertificatesPage.tsx'
import PhysicalEducationPage from '@/pages/PhysicalEducations/PhysicalEducationsPage.tsx'
import GetDepartmentReportPage from '@/pages/Reports/GetDepartmentReportPage.tsx'
import GetGroupReportPage from '@/pages/Reports/GetGroupReportPage.tsx'
import GetHealthReportPage from '@/pages/Reports/GetHealthReportPage'
import StudentDetailsPage from '@/pages/Students/StudentDetailsPage.tsx'
import StudentHistoryPage from '@/pages/Students/StudentHistoryPage.tsx'
import StudentsPage from '@/pages/Students/StudentsPage.tsx'
import UserDetailsPage from '@/pages/Users/UserDetailsPage.tsx'
import UsersPage from '@/pages/Users/UsersPage.tsx'

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
	GET_GROUP_REPORT = 'group-report',
	GET_HEALTH_REPORT = 'check-list-report'
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
	[AppRoutes.GET_GROUP_REPORT]: '/reports/group-report/:id',
	[AppRoutes.GET_HEALTH_REPORT]: '/reports/check-list-report'
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
	},
	[AppRoutes.GET_HEALTH_REPORT]: {
		path: RoutePath['check-list-report'],
		element: <GetHealthReportPage />
	}
}
