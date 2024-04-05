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
	STUDENT_HISTORY = '/students/history',
	MEDICAL_CERTIFICATES = '/medical-certificates'
}

export const enum SERVICE_URL {
	HOME = '/',
	AUTH = 'auth',
	AUTH_ACCESS_TOKEN = 'auth/login/access-token',
	USERS = 'users',
	STUDENTS = 'students',
	PHYSICAL_EDUCATIONS = 'physical-educations',
	HEALTH_GROUPS = 'health-groups',
	GROUPS = 'groups',
	DEPARTMENTS = 'departments',
	COURSES = 'courses',
	MEDICAL_CERTIFICATES = 'medical-certificates'
}

export const enum TOKENS {
	ACCESS_TOKEN = 'access-token',
	REFRESH_TOKEN = 'refresh-token'
}

export const enum LOCAL_STORAGE_KEY {
	USER = 'user',
	STUDENT_HISTORY = 'student-history'
}

export const enum QUERY_KEYS {
	COURSES = 'courses',
	DEPARTMENTS = 'departments',
	GROUPS = 'groups',
	HEALTH_GROUPS = 'health-groups',
	MEDICAL_CERTIFICATES = 'medical-certificates',
	PHYSICAL_EDUCATIONS = 'physical-educations',
	STUDENTS = 'students',
	USERS = 'users'
}
