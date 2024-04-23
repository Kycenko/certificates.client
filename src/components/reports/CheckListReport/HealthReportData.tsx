import { FC, memo } from 'react'

import { IHealthReport } from '@/types/reports.types'

import formatFullName from '@/lib/utils/formatFullName'

interface HealthReportData {
	data: IHealthReport[] | undefined
}

const HealthReportData: FC<HealthReportData> = memo(({ data }) => {
	return (
		<>
			{data?.map(({ id, courses }) =>
				courses?.flatMap(({ groups }) =>
					groups.flatMap(({ students, name: groupName }) =>
						students.flatMap(
							({ name, surname, secondName, medicalCertificates }) =>
								medicalCertificates?.map(({ physicalEducation }) => (
									<tr
										className='border'
										key={`${id}-${name}-${surname}`}
									>
										<td className='p-2'>
											{formatFullName(surname, name, secondName)}
										</td>
										<td>{groupName}</td>
										<td>{physicalEducation.name}</td>
									</tr>
								))
						)
					)
				)
			)}
		</>
	)
})

export default HealthReportData
