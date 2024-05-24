import { format } from 'date-fns'
import { FC } from 'react'

import NoData from '@/components/NoData.tsx'

import { IGroupReport } from '@/modules/reports/types/reports.types.ts'
import formatFullName from '@/shared/utils/formatFullName.ts'

interface GroupReportDataProps {
	data: IGroupReport[] | undefined
}

const GroupReportData: FC<GroupReportDataProps> = ({ data }) => {
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(({ id, students, course }) =>
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
									<td className='p-2'>{course.number}</td>
									<td>{physicalEducation.name}</td>
									<td>{healthGroup.name}</td>
									<td>{format(new Date(startDate), 'dd.MM.yyyy')}</td>
									<td>{format(new Date(finishDate), 'dd.MM.yyyy')}</td>
								</tr>
							)
						)
					)
				)
			)}
		</>
	)
}

export default GroupReportData
