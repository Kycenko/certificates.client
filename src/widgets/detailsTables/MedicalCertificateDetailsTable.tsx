import {
	TypeMedicalCertificateForm,
	useGetMedicalCertificate,
	useUpdateMedicalCertificate
} from '@entities/MedicalCertificate'
import { CustomLoader } from '@shared/ui'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const MedicalCertificateDetailsTable = () => {
	const { id } = useParams()
	const { certificate, isLoading, refetch } = useGetMedicalCertificate(id)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeMedicalCertificateForm>()

	const { update } = useUpdateMedicalCertificate()

	const handleEdit = async (
		id: number | string,
		data: TypeMedicalCertificateForm
	) => {
		const newData = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: certificate?.studentId
		}
		await update({ id: id, data: newData })
		reset()
		refetch()
	}

	if (isLoading) return <CustomLoader />

	return <div>MedicalCertificateDetailsTable</div>
}

export default MedicalCertificateDetailsTable
