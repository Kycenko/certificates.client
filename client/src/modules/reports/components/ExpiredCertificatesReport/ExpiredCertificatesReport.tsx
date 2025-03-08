import { format } from 'date-fns'

import TableHeads from '@/components/tablesHeads/TableHeads'

import { useGetExpiredCertificatesReport } from '../../api/reports.queries.ts'
import usePrint from '../../hooks/usePrint'

import ExpiredCertificatesData from './ExpiredCertificatesData'
import ExpiredCertificatesFilters from './ExpiredCertificatesFilters'
import { ExpiredCertificatesHeads } from './expired-certificates-heads'
import reportStyles from '@/app/styles/Reports.module.scss'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody/ReportBody.tsx'
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
		documentTitle: `expired-certificates-${format(new Date(), 'dd.MM.yyyy')}`
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
			<div className={reportStyles.container}>
				<div className={reportStyles.main}>
					<div className={reportStyles.header}>
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
						className={reportStyles.printBtn}
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
					<tbody className={reportStyles.tBody}>
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
