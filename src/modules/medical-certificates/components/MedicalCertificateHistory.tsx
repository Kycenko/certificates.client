import { memo } from 'react'
import { useParams } from 'react-router-dom'

import Heading from '@/shared/ui/fields/Heading/Heading.tsx'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'
import { CertificateHistoryHeads } from '@/modules/medical-certificates/components/certificates-heads.ts'

import MedicalCertificateHistoryData from './MedicalCertificateHistoryData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetMedicalCertificateHistories } from '@/modules/medical-certificates/queries/medical-certificate-history.queries.ts'

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
