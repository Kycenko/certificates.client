import { useState } from 'react'
import { useParams } from 'react-router-dom'

import DepartmentFilters from './DepartmentFilters.tsx'
import DepartmentReportData from './DepartmentReportData.tsx'
import { DepartmentReportHeads } from '@/modules/reports/components/DepartmentReport/department-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import ReportHeader from '@/modules/reports/components/ReportHeader.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetDepartmentReport } from '@/modules/reports/queries/reports.queries.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import styles from '@/shared/styles/Tables.module.scss'

const DepartmentReport = () => {
	const { id } = useParams()
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [filterValue, setFilterValue] = useState('')
	const { data } = useGetDepartmentReport(id, sortOrder, filterValue)
	console.log(filterValue)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}`
	})
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<>
			<ReportHeader onPrint={handlePrint} />
			<div className='flex justify-between items-end pl-2'>
				<div className='flex gap-3'>
					<DepartmentFilters
						data={data}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
						filterValue={filterValue}
						setFilterValue={setFilterValue}
					/>
				</div>
			</div>

			<ReportBody
				printRef={printRef}
				header='Отчет по медицинским показателем обучающихся отделения:'
				title={departmentName}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={DepartmentReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<DepartmentReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default DepartmentReport
