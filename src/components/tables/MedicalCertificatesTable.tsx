import { useNavigate } from 'react-router-dom'

import MedicalCertificateData from '@/components/tables/tablesData/MedicalCertificateData'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import { PAGES_URL } from '@/constants/enums'
import { CertificatesHeads } from '@/constants/table-heads.ts'

import { TypeMedicalCertificateForm } from '@/types/medical-certificate.types'

import useModal from '@/hooks/useModal'

import CustomLoader from '../ui/loader/CustomLoader'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@/queries/medical-certificate.queries'

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
	const onHistory = (id: number | string) => {
		navigate(`${PAGES_URL.MEDICAL_CERTIFICATE_HISTORY}/${id}`)
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
							onHistory={onHistory}
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
