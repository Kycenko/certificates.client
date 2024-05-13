import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import ReportStats from '../ReportStats.tsx'

import DepartmentFilters from './DepartmentFilters.tsx'
import DepartmentReportData from './DepartmentReportData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import { useGetDepartmentReport } from '@/modules/reports/api/reports.queries.ts'
import { DepartmentReportHeads } from '@/modules/reports/components/DepartmentReport/department-report-heads.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import usePrint from '@/modules/reports/hooks/usePrint.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const DepartmentReport = () => {
	const { id } = useParams()

	const {
		sortOrder,
		setSortOrder,
		departmentValue,
		setDepartmentValue,
		healthValue,
		setHealthValue,
		physicalValue,
		setPhysicalValue
	} = useFilterStates()

	const { data, isLoading } = useGetDepartmentReport(
		id,
		sortOrder,
		departmentValue,
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
				<div className='flex justify-between items-end p-5'>
					<div className='flex items-end gap-3'>
						<DepartmentFilters
							data={data}
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							educationValue={physicalValue}
							setEducationValue={setPhysicalValue}
							healthGroupValue={healthValue}
							setHealthGroupValue={setHealthValue}
						/>
					</div>
					<button
						className='btn btn-error text-white '
						type='submit'
						onClick={handlePrint}
					>
						Экспорт в PDF
					</button>
				</div>
			</div>

			<ReportStats data={data} />

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
