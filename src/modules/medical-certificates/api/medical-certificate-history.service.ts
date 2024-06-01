import {
	IMedicalCertificateHistory,
	TypeMedicalCertificateHistoryForm
} from '@/modules/medical-certificates/types/medical-certificate-history.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

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
