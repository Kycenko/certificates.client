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
	async getAll(groupName?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		const url = groupName
			? `${SERVICE_URL.MEDICAL_CERTIFICATES}?group=${groupName}&sort=${sortOrder}`
			: `${SERVICE_URL.MEDICAL_CERTIFICATES}?sort=${sortOrder}`
		return instance.get<IMedicalCertificate[]>(url)
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
