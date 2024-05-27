import {format} from 'date-fns'
import {FC} from 'react'

import {IPhysicalEducationReport} from '@/modules/reports/types/reports.types.ts'
import formatFullName from '@/shared/utils/formatFullName.ts'

interface PhysicalEducationReportDataProps {
	data: IPhysicalEducationReport[] | undefined
}

const PhysicalEducationReportData: FC<PhysicalEducationReportDataProps> = ({
	data
}) => {
	return (
		<>
			{data?.map(({ id, courses }) =>
				courses?.flatMap(({ groups, number }) =>
					groups.flatMap(({ students, name: groupName }) =>
						students.flatMap(
							({ name, surname, secondName, birthDate, medicalCertificates }) =>
								medicalCertificates?.map(({ physicalEducation }) => (
									<tr
										className='border'
										key={`${id}-${name}-${surname}`}
									>
										<td className='p-2'>
											{formatFullName(surname, name, secondName)}
										</td>
										<td>{format(new Date(birthDate), 'dd.MM.yyyy')}</td>
										<td>{number}</td>
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
}

export default PhysicalEducationReportData
