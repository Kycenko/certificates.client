import { SERVICE_URL } from '@/constants/enums'

import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/types/medical-certificate.types'

import instance from '@/api/api.instance'

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
