import { format } from 'date-fns'
import { FC } from 'react'

import { IMedicalCertificateHistory } from '@/types/medical-certificate-history.types'

import styles from '@/app/styles/Tables.module.scss'

interface MedicalCertificateHistoryDataProps {
	data: IMedicalCertificateHistory[] | undefined
}

const MedicalCertificateHistoryData: FC<MedicalCertificateHistoryDataProps> = ({
	data
}) => {
	return (
		<>
			{data?.map(
				({
					id,
					startDate,
					finishDate,
					createdAt,
					healthGroup,
					physicalEducation
				}) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={'text-center'}>
							{format(new Date(startDate), 'dd.MM.yyyy ')}
						</td>
						<td className={'text-center'}>
							{format(new Date(finishDate), 'dd.MM.yyyy')}
						</td>
						<td className={'text-center'}>{healthGroup.name}</td>
						<td className={'text-center'}>{physicalEducation.name}</td>
						<td className={'text-center'}>
							{format(new Date(createdAt), 'dd.MM.yyyy HH:mm:ss')}
						</td>
					</tr>
				)
			)}
		</>
	)
}

export default MedicalCertificateHistoryData
