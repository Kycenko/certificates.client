import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import usePrint from '../../hooks/usePrint'
import { useGetHealthGroupReport } from '../../queries/reports.queries'

import HealthGroupReportData from './HealthGroupReportData'
import HealthGroupReportFilters from './HealthGroupReportFilters'
import { HealthGroupReportHeads } from './health-group-report-heads'
import { useGetGroups } from '@/modules/groups/queries/group.queries'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import TableHeads from '@/shared/components/tablesHeads/TableHeads'
import styles from '@/shared/styles/Tables.module.scss'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const HealthGroupReport = () => {
	const [search] = useSearchParams()
	const department = search.get('department')
	const course = search.get('course')
	const healthGroup = search.get('hg')

	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [groupValue, setGroupValue] = useState('')

	const { groups } = useGetGroups()

	const { id } = useParams()
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
	if (isLoading) {
		return <CustomLoader />
	}
	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'>
					<div className='flex items-end gap-3'>
						{' '}
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
				title={`${data?.map(({ name }) => name)}`}
			>
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2'}>
						<TableHeads
							className={styles.dHead}
							data={HealthGroupReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<HealthGroupReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default HealthGroupReport
