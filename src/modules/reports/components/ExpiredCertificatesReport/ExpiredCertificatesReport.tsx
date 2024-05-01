import usePrint from '../../hooks/usePrint'
import { useGetExpiredCertificatesReport } from '../../queries/reports.queries'

import ExpiredCertificatesData from './ExpiredCertificatesData'
import { ExpiredCertificatesHeads } from './expired-certificates-heads'
import ReportBody from '@/modules/reports/components/ReportBody.tsx'
import TableHeads from '@/shared/components/tablesHeads/TableHeads'
import styles from '@/shared/styles/Tables.module.scss'
import CustomLoader from '@/shared/ui/loader/CustomLoader'

const ExpiredCertificatesReport = () => {
	const { printRef, handlePrint } = usePrint({
		documentTitle: ``
	})

	const { data, isLoading } = useGetExpiredCertificatesReport()

	console.log(data)

	if (isLoading) return <CustomLoader />

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between items-end p-10'>
					<div className='flex items-end gap-3'></div>
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
