import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Filter from '@/components/filters/Filter/Filter.tsx'
import MedicalCertificateData from '@/components/tables/MedicalCertificates/MedicalCertificateData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { CertificatesHeads } from '@/constants/table-heads.ts'

import { TypeMedicalCertificateForm } from '@/types/medical-certificate.types.ts'

import useModal from '@/hooks/useModal.ts'

import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/queries/group.queries.ts'
import {
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@/queries/medical-certificate.queries.ts'

const MedicalCertificatesTable = () => {
	const navigate = useNavigate()
	const [filterValue, setFilterValue] = useState<string>('')
	const { certificates, isLoading, refetch } =
		useGetMedicalCertificates(filterValue)
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

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<Filter
							label='Фильтрация по группам:'
							filterValue={filterValue}
							setFilterValue={setFilterValue}
						>
							<option value=''>Все группы</option>
							{groups?.map(group => (
								<option
									key={group.id}
									value={group.name}
								>
									{group.name}
								</option>
							))}
						</Filter>
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
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
