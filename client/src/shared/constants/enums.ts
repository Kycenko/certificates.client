export const enum BASE_URL {
	BASE_URL = 'http://localhost:7777/'
}

export const enum PAGES_URL {
	HOME = '/',
	LOGIN = '/login',
	USERS = '/users',
	HEALTHS_GROUPS = '/health-groups',
	PHYSICAL_EDUCATIONS = '/physical-educations',
	DEPARTMENTS = '/departments',
	COURSES = '/courses',
	GROUPS = '/groups',
	STUDENTS = '/students',
	STUDENT_HISTORY = '/student-history',
	MEDICAL_CERTIFICATES = '/medical-certificates',
	MEDICAL_CERTIFICATE_HISTORY = '/medical-certificate-history',
	DEPARTMENT_REPORT = '/reports/department-report',
	EXPIRED_REPORT = '/reports/expired-certificates-report',
	GROUP_REPORT = '/reports/group-report',
	HG_REPORT = '/reports/hg-check-list',
	PE_REPORT = '/reports/pe-check-list'
}

export const enum SERVICE_URL {
	HOME = '/',
	AUTH = 'auth',
	AUTH_ACCESS_TOKEN = 'auth/login/access-token',
	USERS = 'users',
	STUDENTS = 'students',
	STUDENT_HISTORY = 'student-history',
	PHYSICAL_EDUCATIONS = 'physical-educations',
	HEALTH_GROUPS = 'health-groups',
	GROUPS = 'groups',
	DEPARTMENTS = 'departments',
	COURSES = 'courses',
	MEDICAL_CERTIFICATES = 'medical-certificates',
	MEDICAL_CERTIFICATE_HISTORY = 'medical-certificate-history',
	REPORTS = 'reports'
}

export const enum TOKENS {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export const enum LOCAL_STORAGE_KEY {
	USER = 'user'
}
