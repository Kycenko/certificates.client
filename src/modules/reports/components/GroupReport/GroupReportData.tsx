import { format } from 'date-fns'
import { FC, memo } from 'react'

import { IGroupReport } from '@/modules/reports/types/reports.types.ts'
import formatFullName from '@/shared/utils/formatFullName.ts'

interface GroupReportDataProps {
	data: IGroupReport[] | undefined
}

const GroupReportData: FC<GroupReportDataProps> = memo(({ data }) => {
	return (
		<>
			{data?.map(({ id, students, course }) =>
				students?.map(({ name, surname, secondName, medicalCertificates }) =>
					medicalCertificates.map(
						({ startDate, finishDate, healthGroup, physicalEducation }) => (
							<tr
								className='border'
								key={id}
							>
								<td className='p-2'>
									{formatFullName(surname, name, secondName)}
								</td>
								<td className='p-2'>{course.number}-й курс</td>
								<td>{physicalEducation.name}</td>
								<td>{healthGroup.name}</td>
								<td>{format(new Date(startDate), 'dd.MM.yyyy')}</td>
								<td>{format(new Date(finishDate), 'dd.MM.yyyy')}</td>
							</tr>
						)
					)
				)
			)}
		</>
	)
})

export default GroupReportData
