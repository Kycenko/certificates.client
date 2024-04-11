import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import Heading from '@/components/ui/fields/Heading.tsx'

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
					<tr>
						<th>Дата начала</th>
						<th>Дата окончания</th>
						<th>Группа здоровья</th>
						<th>Группа по физкультуре</th>
						<th>Дата и время создания</th>
					</tr>
				</thead>
				<tbody>
					{certificates?.map(
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
				</tbody>
			</table>
		</div>
	)
}

export default MedicalCertificateHistory
