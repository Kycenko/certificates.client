import { memo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import { useGetPhysicalEducationReport } from '../../api/reports.queries.ts'

import HealthReportData from './PhysicalEducationReportData.tsx'
import PhysicalEducationReportFilters from './PhysicalEducationReportFilters.tsx'
import { PhysicalEducationReportHeads } from './physical-education-report-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'

const PhysicalEducationReport = memo(() => {
	const [search] = useSearchParams()
	const department = search.get('department')
	const course = search.get('course')
	const physicalEducation = search.get('pe')

	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [groupValue, setGroupValue] = useState('')

	const { data } = useGetPhysicalEducationReport(
		department,
		course,
		physicalEducation,
		sortOrder,
		groupValue
	)

	const { groups } = useGetGroups()
	const { printRef, handlePrint } = usePrint({
		documentTitle: `health-report-${department}`
	})

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'>
					<div className='flex items-end gap-3'>
						<PhysicalEducationReportFilters
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
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={PhysicalEducationReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<HealthReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
})

export default PhysicalEducationReport
