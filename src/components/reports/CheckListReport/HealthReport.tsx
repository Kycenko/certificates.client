import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import ReportBody from '../ReportBody'
import ReportHeader from '../ReportHeader'

import HealthReportData from './HealthReportData'
import { HealthReportHeads } from './health-report-heads'
import styles from '@/app/styles/Tables.module.scss'
import usePrint from '@/lib/hooks/usePrint'
import { useGetHealthReport } from '@/queries/reports.queries'

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
			<ReportHeader onPrint={handlePrint} />
			<ReportBody
				printRef={printRef}
				header='Листок здоровья отделения:'
				title={`${data?.map(({ name }) => name)}`}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={HealthReportHeads} />
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
