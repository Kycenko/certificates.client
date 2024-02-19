export interface IMedicalCertificate {
	id: number
	startDate: string
	finishDate: string
	studentId: number
	healthGroupId: number
	physicalEducationId: number
}


export type TypeMedicalCertificateForm = Omit<IMedicalCertificate, 'id'>