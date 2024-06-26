import { format } from 'date-fns'
import { FC } from 'react'

import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { IMedicalCertificateHistory } from '@/modules/medical-certificates/types/medical-certificate-history.types.ts'

interface MedicalCertificateHistoryDataProps {
	data: IMedicalCertificateHistory[] | undefined
}

const MedicalCertificateHistoryData: FC<MedicalCertificateHistoryDataProps> = ({
	data
}) => {
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(
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
							<td className={'text-center p-2'}>
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
				)
			)}
		</>
	)
}

export default MedicalCertificateHistoryData
