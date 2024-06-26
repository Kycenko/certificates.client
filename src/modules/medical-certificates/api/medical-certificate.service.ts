import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

export const MedicalCertificateService = {
	async create(data: TypeMedicalCertificateForm) {
		return instance.post<IMedicalCertificate>(
			SERVICE_URL.MEDICAL_CERTIFICATES,
			data
		)
	},
	async getAll(
		page: number = 1,
		limit: number = 100,
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: string,
		group?: string,
		startDate?: Date | string,
		finishDate?: Date | string
	) {
		const departmentParam = department ? `&department=${department}` : ''
		const courseParam = course ? `&course=${course}` : ''
		const groupParam = group ? `&group=${group}` : ''
		const startDateParam = startDate ? `&startDate=${startDate}` : ''
		const finishDateParam = finishDate ? `&finishDate=${finishDate}` : ''
		return instance.get<IMedicalCertificate[]>(
			`${SERVICE_URL.MEDICAL_CERTIFICATES}/?page=${page}&limit=${limit}&sort=${sortOrder}${departmentParam}${courseParam}${groupParam}&${startDateParam}${finishDateParam}`
		)
	},

	async getById(id: string | undefined) {
		return instance.get<IMedicalCertificate>(
			`${SERVICE_URL.MEDICAL_CERTIFICATES}/${id}`
		)
	},

	async update(id: number | string, data: TypeMedicalCertificateForm) {
		return instance.patch<IMedicalCertificate>(
			`${SERVICE_URL.MEDICAL_CERTIFICATES}/${id}`,
			data
		)
	},

	async delete(id: number | string) {
		return instance.delete<IMedicalCertificate>(
			`${SERVICE_URL.MEDICAL_CERTIFICATES}/${id}`
		)
	}
}
