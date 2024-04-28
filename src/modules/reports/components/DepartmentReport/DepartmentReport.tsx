import { memo } from 'react'
import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import DepartmentReportData from './DepartmentReportData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { DepartmentReportHeads } from '@/modules/reports/components/DepartmentReport/department-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import ReportHeader from '@/modules/reports/components/ReportHeader.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetDepartmentReport } from '@/modules/reports/queries/reports.queries.ts'

const DepartmentReport = memo(() => {
	const { id } = useParams()

	const { data } = useGetDepartmentReport(id)

	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}`
	})
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<>
			<ReportHeader onPrint={handlePrint} />
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
})

export default DepartmentReport
