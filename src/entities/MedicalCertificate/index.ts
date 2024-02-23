import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@entities/MedicalCertificate/medical-certificate.types'

import {
	useCreateMedicalCertificate,
	useDeleteMedicalCertificate,
	useGetMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from './medical-certificate.queries'
import { MedicalCertificateService } from './medical-certificate.service'

export {
	MedicalCertificateService,
	useCreateMedicalCertificate,
	useDeleteMedicalCertificate,
	useGetMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
}
export type { IMedicalCertificate, TypeMedicalCertificateForm }
