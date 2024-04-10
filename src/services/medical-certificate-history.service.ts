import { SERVICE_URL } from '@/constants/enums'

import {
	IMedicalCertificateHistory,
	TypeMedicalCertificateHistoryForm
} from '@/types/medical-certificate-history.types'

import instance from '@/api/api.instance'

export const MedicalCertificateHistoryService = {
	async create(data: TypeMedicalCertificateHistoryForm) {
		return instance.post<IMedicalCertificateHistory>(
			`${SERVICE_URL.MEDICAL_CERTIFICATE_HISTORY}`,
			data
		)
	},

	async getAll(medicalCertificateId: string | undefined) {
		return instance.get<IMedicalCertificateHistory[]>(
			`${SERVICE_URL.MEDICAL_CERTIFICATE_HISTORY}/${medicalCertificateId}`
		)
	},

	async delete(id: number | string) {
		return instance.delete<IMedicalCertificateHistory>(
			`${SERVICE_URL.MEDICAL_CERTIFICATE_HISTORY}/${id}`
		)
	}
}
