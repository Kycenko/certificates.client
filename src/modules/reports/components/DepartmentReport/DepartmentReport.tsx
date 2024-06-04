import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import DepartmentFilters from './DepartmentFilters.tsx'
import DepartmentReportData from './DepartmentReportData.tsx'
import DepartmentReportStats from './DepartmentReportStats.tsx'
import reportStyles from '@/app/styles/Reports.module.scss'
import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import { useGetDepartmentReport } from '@/modules/reports/api/reports.queries.ts'
import { DepartmentReportHeads } from '@/modules/reports/components/DepartmentReport/department-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const DepartmentReport = () => {
	const { id } = useParams()

	const {
		sortOrder,
		setSortOrder,
		groupValue,
		setGroupValue,
		healthValue,
		setHealthValue,
		physicalValue,
		setPhysicalValue,
		startDateValue,
		setStartDateValue,
		finishDateValue,
		setFinishDateValue
	} = useFilterStates()

	const { data, isLoading } = useGetDepartmentReport(
		id,
		sortOrder,
		groupValue,
		healthValue,
		physicalValue,
		startDateValue,
		finishDateValue
	)
	const { physicalEducations } = useGetPhysicalEducations()
	const { healthGroups } = useGetHealthGroups()
	const { groups } = useGetGroups()

	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}-${format(new Date(), 'dd.MM.yyyy')}`
	})
	const departmentName = data?.map(({ name }) => (
		<p className={reportStyles.title}>{name}</p>
	))

	return (
		<>
			<div className={reportStyles.container}>
				<div className={reportStyles.main}>
					<div className={reportStyles.header}>
						<DepartmentFilters
							data={data}
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
							groups={groups}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
							educationValue={physicalValue}
							setEducationValue={setPhysicalValue}
							healthGroupValue={healthValue}
							setHealthGroupValue={setHealthValue}
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
				header='Отчет по медицинским показателем обучающихся отделения:'
				title={departmentName}
			>
				<DepartmentReportStats data={data} />
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={DepartmentReportHeads}
						/>
					</thead>
					<tbody className={reportStyles.tBody}>
						{isLoading ? (
							<CustomLoader />
						) : (
							<DepartmentReportData data={data} />
						)}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default DepartmentReport
