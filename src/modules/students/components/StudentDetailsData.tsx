import { format } from 'date-fns'
import { FC, memo } from 'react'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types.ts'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types.ts'
import { IStudent } from '@/modules/students/types/student.types.ts'

import styles from '@/app/styles/DetailsTables.module.scss'
import daysUntilTheEnd from '@/shared/utils/daysUntilTheEnd.ts'
import getDaysUntilExpiry from '@/shared/utils/getDaysUntilExpiry.ts'
import getValidityPeriod from '@/shared/utils/getValidityPeriod.ts'

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

export default memo(StudentDetailsData)
