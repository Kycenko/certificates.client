import {
	TypeMedicalCertificateForm,
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@entities/MedicalCertificate'
import { MedicalCertificateData } from '@features/data'
import { TableHeads } from '@features/heads'
import { CertificatesHeads, PAGES_URL } from '@shared/config'
import { useModal } from '@shared/hooks'
import { CustomLoader } from '@shared/ui'
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
		navigate(`${PAGES_URL.MEDICAL_CERTIFICATES}/${id}`)
	}

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}></div>
				</div>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
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
