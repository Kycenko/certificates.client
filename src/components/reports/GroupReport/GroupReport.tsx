import { useParams } from 'react-router-dom'

import Layout from '@/components/Layout/Layout'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import { GroupReportHeads } from '@/constants/table-heads'

import usePrint from '@/hooks/usePrint'

import ReportBody from '../ReportBody'
import ReportHeader from '../ReportHeader'

import GroupReportData from './GroupReportData'
import styles from '@/app/styles/Tables.module.scss'
import { useGetGroupReport } from '@/queries/reports.queries'

const GroupReport = () => {
	const { id } = useParams()
	const { data } = useGetGroupReport(id)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${id}`
	})
	const groupName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<Layout>
			<ReportHeader onPrint={handlePrint} />
			<ReportBody
				printRef={printRef}
				header='Отчет по медицинским показателем обучающихся группы:'
				title={groupName}
			>
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2'}>
						<TableHeads data={GroupReportHeads} />
					</thead>
					<tbody className='text-center'>
						<GroupReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</Layout>
	)
}

export default GroupReport
