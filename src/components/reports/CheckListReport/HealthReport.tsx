import { useLocation } from 'react-router-dom'

import Layout from '@/components/Layout/Layout'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import ReportBody from '../ReportBody'
import ReportHeader from '../ReportHeader'

import HealthReportData from './HealthReportData'
import { HealthReportHeads } from './health-report-heads'
import styles from '@/app/styles/Tables.module.scss'
import usePrint from '@/lib/hooks/usePrint'
import { useGetHealthReport } from '@/queries/reports.queries'

const HealthReport = () => {
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const department = params.get('department')
	const course = params.get('course')
	const physicalEducation = params.get('physical-education')

	const { data } = useGetHealthReport(
		department as any,
		course as any,
		physicalEducation as any
	)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${department}`
	})

	return (
		<Layout>
			<ReportHeader onPrint={handlePrint} />
			<ReportBody
				printRef={printRef}
				header='Отчет по медицинским показателем обучающихся отделения:'
				title={'f'}
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
		</Layout>
	)
}

export default HealthReport
