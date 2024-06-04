import TableHeads from '@/components/tablesHeads/TableHeads'

import { useGetExpiredCertificatesReport } from '../../api/reports.queries.ts'
import usePrint from '../../hooks/usePrint'

import ExpiredCertificatesData from './ExpiredCertificatesData'
import ExpiredCertificatesFilters from './ExpiredCertificatesFilters'
import { ExpiredCertificatesHeads } from './expired-certificates-heads'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader'

const ExpiredCertificatesReport = () => {
	const {
		sortOrder,
		setSortOrder,
		departmentValue,
		setDepartmentValue,
		courseValue,
		setCourseValue,
		groupValue,
		setGroupValue
	} = useFilterStates()

	const { printRef, handlePrint } = usePrint({
		documentTitle: ``
	})

	const { data, isLoading } = useGetExpiredCertificatesReport(
		sortOrder,
		departmentValue,
		courseValue,
		groupValue
	)
	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-5'>
					<div className='flex items-end gap-3'>
						<ExpiredCertificatesFilters
							departments={departments}
							groups={groups}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							courseValue={courseValue}
							setCourseValue={setCourseValue}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
						/>
					</div>
					<button
						className='btn btn-error text-white'
						type='submit'
						onClick={handlePrint}
					>
						Экспорт в PDF
					</button>
				</div>
			</div>
			<ReportBody
				printRef={printRef}
				header='Отчет по истёкшим медицинским справкам'
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={ExpiredCertificatesHeads}
						/>
					</thead>
					<tbody className='text-center'>
						{isLoading ? (
							<CustomLoader />
						) : (
							<ExpiredCertificatesData data={data} />
						)}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default ExpiredCertificatesReport
