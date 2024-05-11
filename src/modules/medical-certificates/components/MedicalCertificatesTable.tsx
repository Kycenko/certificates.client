import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import MedicalCertificatesFilters from './MedicalCertificatesFilters.tsx'
import { CertificatesHeads } from './certificates-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import {
	useDeleteMedicalCertificate,
	useGetMedicalCertificates,
	useUpdateMedicalCertificate
} from '@/modules/medical-certificates/api/medical-certificate.queries.ts'
import MedicalCertificateData from '@/modules/medical-certificates/components/MedicalCertificateData.tsx'
import { TypeMedicalCertificateForm } from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const MedicalCertificatesTable = () => {
	const navigate = useNavigate()
	const [departmentValue, setDepartmentValue] = useState<string>('')
	const [groupValue, setGroupValue] = useState<string>('')
	const [courseValue, setCourseValue] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const { certificates, isLoading, refetch } = useGetMedicalCertificates(
		sortOrder,
		departmentValue,
		courseValue,
		groupValue
	)
	const { departments } = useGetDepartments()
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
							departments={departments}
							groups={groups}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							courseValue={courseValue}
							setCourseValue={setCourseValue}
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
