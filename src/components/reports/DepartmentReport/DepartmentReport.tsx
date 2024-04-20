import { useParams } from 'react-router-dom'

import { DepartmentReportHeads } from '@/components/reports/DepartmentReport/department-report-heads.ts'

import Layout from '../../Layout/Layout'
import TableHeads from '../../tables/tablesHeads/TableHeads'
import ReportBody from '../ReportBody'
import ReportHeader from '../ReportHeader'

import DepartmentReportData from './DepartmentReportData'
import styles from '@/app/styles/Tables.module.scss'
import usePrint from '@/lib/hooks/usePrint'
import { useGetDepartmentReport } from '@/queries/reports.queries.ts'

const DepartmentReport = () => {
	const { id } = useParams()

	const { data } = useGetDepartmentReport(id)

	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}`
	})
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<Layout>
			<ReportHeader onPrint={handlePrint} />

			<ReportBody
				printRef={printRef}
				header='Отчет по медицинским показателем обучающихся отделения:'
				title={departmentName}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={DepartmentReportHeads} />
					</thead>
					<tbody className='text-center'>
						<DepartmentReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</Layout>
	)
}

export default DepartmentReport