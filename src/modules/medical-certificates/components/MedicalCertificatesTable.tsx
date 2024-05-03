import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MedicalCertificatesFilters from './MedicalCertificatesFilters.tsx'
import { CertificatesHeads } from './certificates-heads.ts'
import { useGetGroups } from '@/modules/groups/queries/group.queries.ts'
import MedicalCertificateData from '@/modules/medical-certificates/components/MedicalCertificateData.tsx'
import {
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@/modules/medical-certificates/queries/medical-certificate.queries.ts'
import { TypeMedicalCertificateForm } from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import styles from '@/shared/styles/Tables.module.scss'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const MedicalCertificatesTable = () => {
	const navigate = useNavigate()
	const [groupValue, setGroupValue] = useState<string>('')
	// const [courseValue, setCourseValue] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const { certificates, isLoading, refetch } = useGetMedicalCertificates(
		// courseValue,
		groupValue,
		sortOrder
	)
	const { groups } = useGetGroups()

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

	const onInfo = (id: number | undefined) => {
		navigate(`${PAGES_URL.STUDENTS}/${id}`)
	}

	window.history.pushState(null, '', `?sort=${sortOrder}&group=${groupValue}`)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<MedicalCertificatesFilters
							groups={groups}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							// courseValue={courseValue}
							// setCourseValue={setCourseValue}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
						/>
					</div>
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
							onInfo={onInfo}
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
