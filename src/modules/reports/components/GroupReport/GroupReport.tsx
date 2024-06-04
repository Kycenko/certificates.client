import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import GroupFilters from './GroupFilters.tsx'
import GroupReportData from './GroupReportData.tsx'
import GroupReportStats from './GroupReportStats.tsx'
import reportStyles from '@/app/styles/Reports.module.scss'
import styles from '@/app/styles/Tables.module.scss'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import { useGetGroupReport } from '@/modules/reports/api/reports.queries.ts'
import { GroupReportHeads } from '@/modules/reports/components/GroupReport/group-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const GroupReport = () => {
	const { id } = useParams()

	const {
		sortOrder,
		setSortOrder,
		healthValue,
		setHealthValue,
		physicalValue,
		setPhysicalValue,
		startDateValue,
		setStartDateValue,
		finishDateValue,
		setFinishDateValue
	} = useFilterStates()

	const { data, isLoading } = useGetGroupReport(
		id,
		sortOrder,
		healthValue,
		physicalValue,
		startDateValue,
		finishDateValue
	)
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${format(new Date(), 'dd.MM.yyyy')}`
	})
	const groupName = data?.map(({ name }) => (
		<p className={reportStyles.title}>{name}</p>
	))

	return (
		<>
			<div className={reportStyles.container}>
				<div className={reportStyles.main}>
					<div className={reportStyles.header}>
						<GroupFilters
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							healthValue={healthValue}
							setHealthValue={setHealthValue}
							educationValue={physicalValue}
							setEducationValue={setPhysicalValue}
							startDate={startDateValue}
							setStartDate={setStartDateValue}
							finishDate={finishDateValue}
							setFinishDate={setFinishDateValue}
						/>
					</div>
					<button
						className={reportStyles.printBtn}
						type='submit'
						onClick={handlePrint}
					>
						Экспорт в PDF
					</button>
				</div>
			</div>

			<ReportBody
				printRef={printRef}
				header='Отчет по медицинским показателем обучающихся группы:'
				title={groupName}
			>
				<GroupReportStats data={data} />
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={GroupReportHeads}
						/>
					</thead>
					<tbody className={reportStyles.tBody}>
						{isLoading ? <CustomLoader /> : <GroupReportData data={data} />}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default GroupReport
