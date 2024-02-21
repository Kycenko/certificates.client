import {
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@entities/MedicalCertificate/medical-certificate.queries'
import { TypeMedicalCertificateForm } from '@entities/MedicalCertificate/medical-certificate.types'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { CertificatesHeads } from '@features/TableHeads.tsx'
import MedicalCertificateData from '@features/data/MedicalCertificateData'
import { useModal } from '@shared/hooks'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const MedicalCertificatesTable = () => {
	const navigate = useNavigate()
	const { certificates, isLoading, refetch } = useGetMedicalCertificates()

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

	const handleInfo = (id: number | string) => {
		navigate(`/medical-certificates/${id}`)
	}

	if (isLoading) return <Loader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<SortOrder />
					</div>
				</div>
				<table className={styles.table}>
					<thead>
						<TableHeads data={CertificatesHeads} />
					</thead>
					<tbody>
						<MedicalCertificateData
							data={certificates}
							onDelete={handleDelete}
							onEdit={handleEdit}
							onInfo={handleInfo}
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
