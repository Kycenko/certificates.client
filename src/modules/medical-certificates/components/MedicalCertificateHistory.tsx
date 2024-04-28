import { memo } from 'react'
import { useParams } from 'react-router-dom'

import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'

import MedicalCertificateHistoryData from './MedicalCertificateHistoryData.tsx'
import styles from '@/shared/styles/Tables.module.scss'
import { CertificateHistoryHeads } from '@/modules/medical-certificates/components/certificates-heads.ts'
import { useGetMedicalCertificateHistories } from '@/modules/medical-certificates/queries/medical-certificate-history.queries.ts'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'

const MedicalCertificateHistory = memo(() => {
	const { id } = useParams()
	const { certificates } = useGetMedicalCertificateHistories(id)

	return (
		<div>
			<Heading title={'История изменений медицинской справки'}></Heading>
			<table className={styles.table}>
				<thead className={styles.tHeads}>
					<TableHeads
						className={styles.dHead}
						data={CertificateHistoryHeads}
					/>
				</thead>
				<tbody>
					<MedicalCertificateHistoryData data={certificates} />
				</tbody>
			</table>
		</div>
	)
})

export default MedicalCertificateHistory
