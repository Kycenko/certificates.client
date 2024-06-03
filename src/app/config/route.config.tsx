import { RouteProps } from 'react-router-dom'

import { CourseDetailsPageLazy } from '@/pages/Courses/CourseDetailsPage.lazy.tsx'
import { CoursesPageLazy } from '@/pages/Courses/CoursesPage.lazy.tsx'
import { DepartmentDetailsPageLazy } from '@/pages/Departments/DepartmentDetailsPageLazy.tsx'
import { DepartmentsPageLazy } from '@/pages/Departments/DepartmentsPageLazy.tsx'
import { GroupDetailsPageLazy } from '@/pages/Groups/GroupDetailsPageLazy.tsx'
import { GroupsPageLazy } from '@/pages/Groups/GroupsPageLazy.tsx'
import { HealthGroupsPageLazy } from '@/pages/HealthGroups/HealthGroupsPageLazy.tsx'
import { HomePageLazy } from '@/pages/Home/HomePageLazy.tsx'
import { LoginPageLazy } from '@/pages/Login/LoginPageLazy.tsx'
import { MedicalCertificateHistoryPageLazy } from '@/pages/MedicalCertificates/MedicalCertificateHistoryPageLazy.tsx'
import { MedicalCertificatesPageLazy } from '@/pages/MedicalCertificates/MedicalCertificatesPageLazy.tsx'
import { NotFoundPageLazy } from '@/pages/NotFound/NotFoundPageLazy.tsx'
import { PhysicalEducationsPageLazy } from '@/pages/PhysicalEducations/PhysicalEducationsPageLazy.tsx'
import { GetDepartmentReportPageLazy } from '@/pages/Reports/GetDepartmentReportPageLazy.tsx'
import { GetExpiredCertificatesReportPageLazy } from '@/pages/Reports/GetExpiredCertificatesReportPageLazy.tsx'
import { GetGroupReportPageLazy } from '@/pages/Reports/GetGroupReportPageLazy.tsx'
import { GetHealthGroupReportPageLazy } from '@/pages/Reports/GetHealthGroupReportPageLazy.tsx'
import { GetPhysicalEducationReportPageLazy } from '@/pages/Reports/GetPhysicalEducationReportPageLazy.tsx'
import { StudentDetailsPageLazy } from '@/pages/Students/StudentDetailsPageLazy.tsx'
import { StudentHistoryPageLazy } from '@/pages/Students/StudentHistoryPageLazy.tsx'
import { StudentsPageLazy } from '@/pages/Students/StudentsPageLazy.tsx'
import { UserDetailsPageLazy } from '@/pages/Users/UserDetailsPageLazy.tsx'
import { UsersPageLazy } from '@/pages/Users/UsersPageLazy.tsx'

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
	GET_PHYSICAL_EDUCATION_REPORT = 'pe-check-list',
	GET_HEALTH_GROUP_REPORT = 'hg-check-list',
	GET_EXPIRED_CERTIFICATES_REPORT = 'expired-certificates',
	NOT_FOUND = 'not-found'
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
	[AppRoutes.GET_PHYSICAL_EDUCATION_REPORT]: '/reports/pe-check-list',
	[AppRoutes.GET_HEALTH_GROUP_REPORT]: '/reports/hg-check-list',
	[AppRoutes.GET_EXPIRED_CERTIFICATES_REPORT]:
		'/reports/expired-certificates-report',
	[AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPageLazy />
	},
	[AppRoutes.HOME]: {
		path: RoutePath.home,
		element: <HomePageLazy />
	},
	[AppRoutes.USERS]: {
		path: RoutePath.users,
		element: <UsersPageLazy />
	},
	[AppRoutes.USER_DETAILS]: {
		path: RoutePath['user-details'],
		element: <UserDetailsPageLazy />
	},
	[AppRoutes.HEALTH_GROUPS]: {
		path: RoutePath['health-groups'],
		element: <HealthGroupsPageLazy />
	},
	[AppRoutes.PHYSICAL_EDUCATION]: {
		path: RoutePath['physical-education'],
		element: <PhysicalEducationsPageLazy />
	},
	[AppRoutes.DEPARTMENTS]: {
		path: RoutePath.departments,
		element: <DepartmentsPageLazy />
	},
	[AppRoutes.DEPARTMENT_DETAILS]: {
		path: RoutePath['department-details'],
		element: <DepartmentDetailsPageLazy />
	},
	[AppRoutes.COURSES]: {
		path: RoutePath.courses,
		element: <CoursesPageLazy />
	},
	[AppRoutes.COURSE_DETAILS]: {
		path: RoutePath['course-details'],
		element: <CourseDetailsPageLazy />
	},
	[AppRoutes.GROUPS]: {
		path: RoutePath.groups,
		element: <GroupsPageLazy />
	},
	[AppRoutes.GROUP_DETAILS]: {
		path: RoutePath['group-details'],
		element: <GroupDetailsPageLazy />
	},
	[AppRoutes.STUDENTS]: {
		path: RoutePath.students,
		element: <StudentsPageLazy />
	},

	[AppRoutes.STUDENT_HISTORY]: {
		path: RoutePath['student-history'],
		element: <StudentHistoryPageLazy />
	},

	[AppRoutes.STUDENT_DETAILS]: {
		path: RoutePath['student-details'],
		element: <StudentDetailsPageLazy />
	},
	[AppRoutes.MEDICAL_CERTIFICATES]: {
		path: RoutePath['medical-certificates'],
		element: <MedicalCertificatesPageLazy />
	},
	[AppRoutes.MEDICAL_CERTIFICATE_HISTORY]: {
		path: RoutePath['medical-certificate-history'],
		element: <MedicalCertificateHistoryPageLazy />
	},
	[AppRoutes.GET_DEPARTMENT_REPORT]: {
		path: RoutePath['department-report'],
		element: <GetDepartmentReportPageLazy />
	},
	[AppRoutes.GET_GROUP_REPORT]: {
		path: RoutePath['group-report'],
		element: <GetGroupReportPageLazy />
	},
	[AppRoutes.GET_PHYSICAL_EDUCATION_REPORT]: {
		path: RoutePath['pe-check-list'],
		element: <GetPhysicalEducationReportPageLazy />
	},
	[AppRoutes.GET_HEALTH_GROUP_REPORT]: {
		path: RoutePath['hg-check-list'],
		element: <GetHealthGroupReportPageLazy />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['not-found'],
		element: <NotFoundPageLazy />
	},
	[AppRoutes.GET_EXPIRED_CERTIFICATES_REPORT]: {
		path: RoutePath['expired-certificates'],
		element: <GetExpiredCertificatesReportPageLazy />
	}
}
