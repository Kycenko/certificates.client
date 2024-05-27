import {useParams, useSearchParams} from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads'

import {useGetHealthGroupReport} from '../../api/reports.queries.ts'
import usePrint from '../../hooks/usePrint'

import HealthGroupReportData from './HealthGroupReportData'
import HealthGroupReportFilters from './HealthGroupReportFilters'
import {HealthGroupReportHeads} from './health-group-report-heads'
import styles from '@/app/styles/Tables.module.scss'
import {useGetGroups} from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const HealthGroupReport = () => {
	const { id } = useParams()
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
		documentTitle: `group-report-${id}`
	})
	const departmentName = data?.map(({ name }) => <p>{name}</p>)

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-5'>
					<div className='flex items-end gap-3'>
						<HealthGroupReportFilters
							groups={groups}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
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
			<ReportBody
				printRef={printRef}
				header='Листок здоровья отделения:'
				title={departmentName}
			>
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2'}>
						<TableHeads
							className={styles.dHead}
							data={HealthGroupReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
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
