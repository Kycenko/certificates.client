import MedicalCertificateData from '@/components/tables/tablesData/MedicalCertificateData'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

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
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
