import { useParams } from 'react-router-dom'

import Heading from '@/components/ui/fields/Heading.tsx'

import TableHeads from '../../tablesHeads/TableHeads'
import { CertificateHistoryHeads } from '../certificates-heads'

import MedicalCertificateHistoryData from './MedicalCertificateHistoryData'
import styles from '@/app/styles/Tables.module.scss'
import { useGetMedicalCertificateHistories } from '@/queries/medical-certificate-history.queries.ts'

const MedicalCertificateHistory = () => {
	const { id } = useParams()
	const { certificates } = useGetMedicalCertificateHistories(id)

	return (
		<div>
			<Heading title={'История изменений медицинской справки'}></Heading>
			<table className={styles.table}>
				<thead className={styles.tHeads}>
					<TableHeads data={CertificateHistoryHeads} />
				</thead>
				<tbody>
					<MedicalCertificateHistoryData data={certificates} />
				</tbody>
			</table>
		</div>
	)
}

export default MedicalCertificateHistory
