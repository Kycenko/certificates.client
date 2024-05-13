import { format } from 'date-fns'
import { FC } from 'react'

import NoData from '@/components/NoData.tsx'

import { IHealthGroupReport } from '../../types/reports.types'

import formatFullName from '@/shared/utils/formatFullName'

interface HealthGroupReportDataProps {
	data: IHealthGroupReport[] | undefined
}

const HealthGroupReportData: FC<HealthGroupReportDataProps> = ({ data }) => {
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(({ id, courses }) =>
					courses?.map(({ groups, number }) =>
						groups.map(({ students, name: groupName }) =>
							students.map(
								({
									name,
									surname,
									secondName,
									birthDate,
									medicalCertificates
								}) =>
									medicalCertificates.map(({ healthGroup }) => (
										<tr
											className='border'
											key={`${id}-${name}-${surname}`}
										>
											<td className='p-2'>
												{formatFullName(surname, name, secondName)}
											</td>
											<td>{format(new Date(birthDate), 'dd.MM.yyyy')}</td>
											<td>{number}-й курс</td>
											<td>{groupName}</td>
											<td>{healthGroup.name}</td>
										</tr>
									))
							)
						)
					)
				)
			)}
		</>
	)
}

export default HealthGroupReportData
