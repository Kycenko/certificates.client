import { memo } from 'react'
import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import GroupFilters from './GroupFilters.tsx'
import GroupReportData from './GroupReportData.tsx'
import GroupReportStats from './GroupReportStats.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import { useGetGroupReport } from '@/modules/reports/api/reports.queries.ts'
import { GroupReportHeads } from '@/modules/reports/components/GroupReport/group-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const GroupReport = memo(() => {
	const { id } = useParams()

	const {
		sortOrder,
		setSortOrder,
		healthValue,
		setHealthValue,
		physicalValue,
		setPhysicalValue
	} = useFilterStates()

	const { data, isLoading } = useGetGroupReport(
		id,
		sortOrder,
		healthValue,
		physicalValue
	)
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${id}`
	})
	const groupName = data?.map(({ name }) => <p>{name}</p>)

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-5'>
					<div className='flex items-end gap-3'>
						<GroupFilters
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							healthValue={healthValue}
							setHealthValue={setHealthValue}
							educationValue={physicalValue}
							setEducationValue={setPhysicalValue}
						/>
					</div>
					<button
						className='btn btn-error text-white'
						type='submit'
						onClick={handlePrint}
					>
						Экспорт в PDF
					</button>
				</div>
			</div>

			<GroupReportStats data={data} />

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
						{isLoading ? <CustomLoader /> : <GroupReportData data={data} />}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
})

export default GroupReport
