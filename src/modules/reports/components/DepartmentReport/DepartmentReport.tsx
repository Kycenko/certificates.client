import { useState } from 'react'
import { useParams } from 'react-router-dom'

import DepartmentFilters from './DepartmentFilters.tsx'
import DepartmentReportData from './DepartmentReportData.tsx'
import { useGetHealthGroups } from '@/modules/health-groups/queries/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/queries/physical-education.queries.ts'
import { DepartmentReportHeads } from '@/modules/reports/components/DepartmentReport/department-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import { useGetDepartmentReport } from '@/modules/reports/queries/reports.queries.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import styles from '@/shared/styles/Tables.module.scss'

const DepartmentReport = () => {
	const { id } = useParams()
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [filterValue, setFilterValue] = useState('')
	const [healthValue, setHealthValue] = useState('')
	const [physicalValue, setPhysicalValue] = useState('')
	const { data } = useGetDepartmentReport(
		id,
		sortOrder,
		filterValue,
		healthValue,
		physicalValue
	)
	const { physicalEducations } = useGetPhysicalEducations()
	const { healthGroups } = useGetHealthGroups()

	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}`
	})
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'>
					<div className='flex items-end gap-3'>
						<DepartmentFilters
							data={data}
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							filterValue={filterValue}
							setFilterValue={setFilterValue}
							educationValue={physicalValue}
							setEducationValue={setPhysicalValue}
							healthGroupValue={healthValue}
							setHealthGroupValue={setHealthValue}
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
				header='Отчет по медицинским показателем обучающихся отделения:'
				title={departmentName}
			>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={DepartmentReportHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<DepartmentReportData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default DepartmentReport
