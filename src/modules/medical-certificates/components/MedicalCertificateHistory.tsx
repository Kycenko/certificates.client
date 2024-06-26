import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import MedicalCertificateHistoryData from './MedicalCertificateHistoryData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetMedicalCertificateHistories } from '@/modules/medical-certificates/api/medical-certificate-history.queries.ts'
import { CertificateHistoryHeads } from '@/modules/medical-certificates/components/certificates-heads.ts'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const MedicalCertificateHistory = () => {
	const { id } = useParams()
	const { certificates, isLoading } = useGetMedicalCertificateHistories(id)

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
					{isLoading ? (
						<CustomLoader />
					) : (
						<MedicalCertificateHistoryData data={certificates} />
					)}
				</tbody>
			</table>
		</div>
	)
}

export default MedicalCertificateHistory
