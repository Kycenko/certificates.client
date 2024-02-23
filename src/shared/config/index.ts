import { IBase } from './base.interface'
import {
	BASE_URL,
	LOCAL_STORAGE_KEY,
	PAGES_URL,
	QUERY_KEYS,
	SERVICE_URL,
	TOKENS
} from './enums'
import {
	CertificatesHeads,
	CourseHeads,
	DepartmentHeads,
	DetailsCertificatesHeads,
	DetailsCourseHeads,
	DetailsDepartmentHeads,
	DetailsGroupHeads,
	DetailsStudentHeads,
	GroupHeads,
	StudentHeads
} from './heads'
import { authToast, createToast, deleteToast, editToast } from './toasts'

export {
	BASE_URL,
	CertificatesHeads,
	CourseHeads,
	DepartmentHeads,
	DetailsCertificatesHeads,
	DetailsCourseHeads,
	DetailsDepartmentHeads,
	DetailsGroupHeads,
	DetailsStudentHeads,
	GroupHeads,
	LOCAL_STORAGE_KEY,
	PAGES_URL,
	QUERY_KEYS,
	SERVICE_URL,
	StudentHeads,
	TOKENS,
	authToast,
	createToast,
	deleteToast,
	editToast
}
export type { IBase }
