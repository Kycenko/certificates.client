import { memo, useState } from 'react'
import { useParams } from 'react-router-dom'

import GroupFilters from './GroupFilters.tsx'
import GroupReportData from './GroupReportData.tsx'
import { useGetHealthGroups } from '@/modules/health-groups/queries/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/queries/physical-education.queries.ts'
import { GroupReportHeads } from '@/modules/reports/components/GroupReport/group-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import ReportHeader from '@/modules/reports/components/ReportHeader.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetGroupReport } from '@/modules/reports/queries/reports.queries.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import styles from '@/shared/styles/Tables.module.scss'

const GroupReport = memo(() => {
	const { id } = useParams()
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [healthValue, setHealthValue] = useState('')
	const [educationValue, setEducationValue] = useState('')
	const { data } = useGetGroupReport(id, sortOrder, healthValue, educationValue)
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${id}`
	})
	const groupName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<>
			<ReportHeader onPrint={handlePrint} />
			<div className='flex justify-between items-end pl-2'>
				<div className='flex gap-3 mb-10'>
					<GroupFilters
						healthGroups={healthGroups}
						physicalEducations={physicalEducations}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
						healthValue={healthValue}
						setHealthValue={setHealthValue}
						educationValue={educationValue}
						setEducationValue={setEducationValue}
					/>
				</div>
			</div>
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
