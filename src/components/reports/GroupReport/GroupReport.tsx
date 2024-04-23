import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { GroupReportHeads } from '@/components/reports/GroupReport/group-report-heads.ts'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import ReportBody from '../ReportBody'
import ReportHeader from '../ReportHeader'

import GroupReportData from './GroupReportData'
import styles from '@/app/styles/Tables.module.scss'
import usePrint from '@/lib/hooks/usePrint'
import { useGetGroupReport } from '@/queries/reports.queries'

const GroupReport = memo(() => {
	const { id } = useParams()
	const { data } = useGetGroupReport(id)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${id}`
	})
	const groupName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<>
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
		</>
	)
})

export default GroupReport
