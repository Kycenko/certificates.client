import { format } from 'date-fns'
import { FC } from 'react'

import { IHealthGroup } from '@/types/health-group.types'
import { IPhysicalEducation } from '@/types/physical-education.types'
import { IStudent } from '@/types/student.types'

import styles from '@/app/styles/Tables.module.scss'
import daysUntilTheEnd from '@/lib/utils/daysUntilTheEnd'
import getDaysUntilExpiry from '@/lib/utils/getDaysUntilExpiry'
import getValidityPeriod from '@/lib/utils/getValidityPeriod'

interface IStudentDetailsDataProps {
	data: IStudent | undefined
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
}
const StudentDetailsData: FC<IStudentDetailsDataProps> = ({
	data,
	healthGroups,
	physicalEducations
}) => {
	return (
		<>
			{data?.medicalCertificates?.map(
				({ id, startDate, finishDate, healthGroupId, physicalEducationId }) => (
					<tr
						className={`
								${styles.daysCell}
								${daysUntilTheEnd(finishDate) === 'Да' ? styles.greenBg : styles.redBg}
								${getDaysUntilExpiry(finishDate, startDate) < 30 ? styles.yellowBg : null}
							`}
						key={id}
					>
						<td className={styles.cellPadding}>
							{format(new Date(startDate), 'dd.MM.yyyy')}
						</td>
						<td className={styles.cellPadding}>
							{format(new Date(finishDate), 'dd.MM.yyyy')}
						</td>
						<td>{getValidityPeriod(finishDate, startDate)} </td>
						<td>{getDaysUntilExpiry(finishDate, startDate)}</td>
						<td>
							{healthGroups
								?.filter(({ id }) => id === healthGroupId)
								?.map(({ name }) => name)}
						</td>
						<td>
							{physicalEducations
								?.filter(({ id }) => id === physicalEducationId)
								?.map(({ name }) => name)}
						</td>
						<td>{daysUntilTheEnd(finishDate)}</td>
					</tr>
				)
			)}
		</>
	)
}

export default StudentDetailsData
