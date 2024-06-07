import { format } from 'date-fns'
import { useSearchParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads'

import { useGetHealthGroupReport } from '../../api/reports.queries.ts'
import usePrint from '../../hooks/usePrint'

import HealthGroupReportData from './HealthGroupReportData'
import HealthGroupReportFilters from './HealthGroupReportFilters'
import { HealthGroupReportHeads } from './health-group-report-heads'
import reportStyles from '@/app/styles/Reports.module.scss'
import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody/ReportBody.tsx'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const HealthGroupReport = () => {
	const [search] = useSearchParams()
	const department = search.get('department')
	const course = search.get('course')
	const healthGroup = search.get('hg')

	const { sortOrder, setSortOrder, groupValue, setGroupValue } =
		useFilterStates()
	const { groups } = useGetGroups()

	const { data, isLoading } = useGetHealthGroupReport(
		department,
		course,
		healthGroup,
		sortOrder,
		groupValue
	)

	const { printRef, handlePrint } = usePrint({
		documentTitle: `group-report-${format(new Date(), 'dd.MM.yyyy')}`
	})

	return (
		<>
			<div className={reportStyles.container}>
				<div className={reportStyles.main}>
					<div className={reportStyles.header}>
						<HealthGroupReportFilters
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
								Листок по группе здоровья: <b>{healthGroup}</b>
							</p>
							<p>
								Отделение:
								<b> {department}</b>
							</p>
						</div>
					</>
				}
			>
				<div className='flex flex-col items-center'>
					<div className='mb-2'>
						<p>
							Всего выбрано обучающихся: <b>{data?.length || 0}</b>
						</p>
					</div>
				</div>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={HealthGroupReportHeads}
						/>
					</thead>
					<tbody className={reportStyles.tBody}>
						{isLoading ? (
							<CustomLoader />
						) : (
							<HealthGroupReportData data={data} />
						)}
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default HealthGroupReport
