import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import HealthReportData from './HealthReportData.tsx'
import { HealthReportHeads } from './health-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import ReportHeader from '@/modules/reports/components/ReportHeader.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetHealthReport } from '@/modules/reports/queries/reports.queries.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import styles from '@/shared/styles/Tables.module.scss'

const HealthReport = memo(() => {
	const [search] = useSearchParams()
	const department = search.get('department')
	const course = search.get('course')
	const physicalEducation = search.get('physical-education')

	const { data } = useGetHealthReport(department, course, physicalEducation)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `health-report-${department}`
	})

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'></div>

				<div className='flex items-end gap-3'>
					{/* <HealthReportFilters data={data} sortOrder={}/> */}
				</div>
			</div>
			<ReportHeader onPrint={handlePrint} />
			<ReportBody
				printRef={printRef}
				header='Листок здоровья отделения:'
				title={`${data?.map(({ name }) => name)}`}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={HealthReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<HealthReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
})

export default HealthReport
