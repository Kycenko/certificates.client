import { useState } from 'react'

import TableHeads from '@/components/tablesHeads/TableHeads'

import { useGetExpiredCertificatesReport } from '../../api/reports.queries.ts'
import usePrint from '../../hooks/usePrint'

import ExpiredCertificatesData from './ExpiredCertificatesData'
import ExpiredCertificatesFilters from './ExpiredCertificatesFilters'
import { ExpiredCertificatesHeads } from './expired-certificates-heads'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader'

const ExpiredCertificatesReport = () => {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [departmentValue, setDepartmentValue] = useState('')
	const [courseValue, setCourseValue] = useState('')
	const [groupValue, setGroupValue] = useState('')

	const { printRef, handlePrint } = usePrint({
		documentTitle: ``
	})

	const { data, isLoading } = useGetExpiredCertificatesReport(
		sortOrder,
		departmentValue,
		courseValue,
		groupValue
	)
	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()
	console.log(data)

	if (isLoading) return <CustomLoader />

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'>
					<div className='flex items-end gap-3'>
						<ExpiredCertificatesFilters
							departments={departments}
							groups={groups}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							courseValue={courseValue}
							setCourseValue={setCourseValue}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
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
				header='Отчет по истёкшим медицинским справкам'
				title={''}
			>
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2'}>
						<TableHeads
							className={styles.dHead}
							data={ExpiredCertificatesHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<ExpiredCertificatesData data={data} />
					</tbody>
				</table>
			</ReportBody>
		</>
	)
}

export default ExpiredCertificatesReport
