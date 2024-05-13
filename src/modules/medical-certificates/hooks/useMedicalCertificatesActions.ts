import { QueryObserverResult } from '@tanstack/react-query'

import {
	useDeleteMedicalCertificate,
	useUpdateMedicalCertificate
} from '@/modules/medical-certificates/api/medical-certificate.queries.ts'
import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import useModal from '@/shared/hooks/useModal'

const useMedicalCertificatesActions = (
	refetch: () => Promise<QueryObserverResult<IMedicalCertificate[], Error>>
) => {
	const { closeModal } = useModal()

	const { update } = useUpdateMedicalCertificate()
	const { remove } = useDeleteMedicalCertificate()

	const handleEdit = async (
		id: number | string,
		data: TypeMedicalCertificateForm
	) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	return {
		handleEdit,
		handleDelete
	}
}

export default useMedicalCertificatesActions
