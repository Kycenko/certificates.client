import { memo } from 'react'
import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import GroupReportData from './GroupReportData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { GroupReportHeads } from '@/modules/reports/components/GroupReport/group-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import ReportHeader from '@/modules/reports/components/ReportHeader.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetGroupReport } from '@/modules/reports/queries/reports.queries.ts'

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
						<TableHeads
							className={styles.dHead}
							data={GroupReportHeads}
						/>
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
