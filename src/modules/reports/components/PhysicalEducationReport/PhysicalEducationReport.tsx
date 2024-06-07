import { format } from 'date-fns'
import { useSearchParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import { useGetPhysicalEducationReport } from '../../api/reports.queries.ts'

import PhysicalEducationReportData from './PhysicalEducationReportData.tsx'
import PhysicalEducationReportFilters from './PhysicalEducationReportFilters.tsx'
import { PhysicalEducationReportHeads } from './physical-education-report-heads.ts'
import reportStyles from '@/app/styles/Reports.module.scss'
import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const PhysicalEducationReport = () => {
	const [search] = useSearchParams()
	const department = search.get('department')
	const course = search.get('course')
	const physicalEducation = search.get('pe')

	const { sortOrder, setSortOrder, groupValue, setGroupValue } =
		useFilterStates()

	const { data, isLoading } = useGetPhysicalEducationReport(
		department,
		course,
		physicalEducation,
		sortOrder,
		groupValue
	)
	console.log(data)

	const { groups } = useGetGroups()
	const { printRef, handlePrint } = usePrint({
		documentTitle: `health-report-${format(new Date(), 'dd.MM.yyyy')}`
	})

	return (
		<>
			<div className={reportStyles.container}>
				<div className={reportStyles.main}>
					<div className={reportStyles.header}>
						<PhysicalEducationReportFilters
							groups={groups}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
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
				header={
					<>
						<div className='flex flex-col text-center'>
							<p>
								Листок по группе по физкультуре: <b>{physicalEducation}</b>
							</p>
							<p>
								Отделение:
								<b> {department}</b>
							</p>
						</div>
					</>
				}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={PhysicalEducationReportHeads}
						/>
					</thead>
					<tbody className={reportStyles.tBody}>
						{isLoading ? (
							<CustomLoader />
						) : (
							<PhysicalEducationReportData data={data} />
						)}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default PhysicalEducationReport
