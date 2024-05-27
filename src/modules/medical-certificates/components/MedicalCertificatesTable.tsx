import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Pagination from '@/components/Pagination/Pagination.tsx'
import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import useMedicalCertificatesActions from '../hooks/useMedicalCertificatesActions.ts'

import MedicalCertificatesFilters from './MedicalCertificatesFilters.tsx'
import {CertificatesHeads} from './certificates-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import {useGetDepartments} from '@/modules/departments/api/department.queries.ts'
import {useGetGroups} from '@/modules/groups/api/group.queries.ts'
import {useGetHealthGroups} from '@/modules/health-groups/api/health-group.query.ts'
import {useGetMedicalCertificates} from '@/modules/medical-certificates/api/medical-certificate.queries.ts'
import MedicalCertificateData from '@/modules/medical-certificates/components/MedicalCertificateData.tsx'
import {useGetPhysicalEducations} from '@/modules/physical-educations/api/physical-education.queries.ts'
import {PAGES_URL} from '@/shared/constants/enums.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const MedicalCertificatesTable = () => {
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState(1)
	const {
		departmentValue,
		setDepartmentValue,
		courseValue,
		setCourseValue,
		groupValue,
		setGroupValue,
		sortOrder,
		setSortOrder
	} = useFilterStates()

	const { certificates, isLoading, refetch, totalPages, totalRecords } =
		useGetMedicalCertificates(
			currentPage,
			10,
			sortOrder,
			departmentValue,
			courseValue,
			groupValue
		)

	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()

	const { handleDelete, handleEdit } = useMedicalCertificatesActions(refetch)

	const onHistory = (id: number | string) => {
		navigate(`${PAGES_URL.MEDICAL_CERTIFICATE_HISTORY}/${id}`)
	}

	const onInfo = (id: number | undefined) => {
		navigate(`${PAGES_URL.STUDENTS}/${id}`)
	}
	const onChangePage = (page: number) => {
		setCurrentPage(page)
	}
	useEffect(() => {
		window.history.pushState(
			null,
			'',
			`?page=${currentPage}&sort=${sortOrder}&department=${departmentValue}&course=${courseValue}&group=${groupValue}`
		)
	}, [sortOrder, departmentValue, courseValue, groupValue, currentPage])

	return (
		<div className={styles.container}>
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
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={CertificatesHeads} />
					</thead>
					<tbody>
						{isLoading ? (
							<CustomLoader />
						) : (
							<MedicalCertificateData
								data={certificates}
								healthGroups={healthGroups}
								physicalEducations={physicalEducations}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onHistory={onHistory}
								onInfo={onInfo}
							/>
						)}
					</tbody>
				</table>
				<Pagination
					currentPage={currentPage}
					onChangePage={onChangePage}
					totalPages={totalPages}
				>
					Всего медицинских справок: {totalRecords}
				</Pagination>
			</div>
		</div>
	)
}

export default MedicalCertificatesTable
