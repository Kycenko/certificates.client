import { format } from 'date-fns'
import { FC, memo } from 'react'

import { IDepartmentReport } from '@/modules/reports/types/reports.types.ts'
import NoData from '@/shared/components/NoData'
import formatFullName from '@/shared/utils/formatFullName.ts'

interface DepartmentReportDataProps {
	data: IDepartmentReport[] | undefined
}
const DepartmentReportData: FC<DepartmentReportDataProps> = memo(({ data }) => {
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	if (!data || data.length === 0) return <NoData />
	return (
		<>
			{data?.map(({ id, courses }) =>
				courses?.flatMap(({ groups, number }) =>
					groups.flatMap(({ students, name: groupName }) =>
						students.flatMap(
							({ name, surname, secondName, medicalCertificates }) =>
								medicalCertificates?.map(
									(
										{ startDate, finishDate, healthGroup, physicalEducation },
										index
									) => (
										<tr
											className='border '
											key={`${id}-${name}-${surname}-${index}`}
										>
											<td className='p-2'>
												{formatFullName(surname, name, secondName)}
											</td>
											<td>{number}-й курс</td>
											<td>{groupName}</td>
											<td>{departmentName}</td>
											<td>{physicalEducation.name}</td>
											<td>{healthGroup.name}</td>
											<td>{format(new Date(startDate), 'dd.MM.yyyy')}</td>
											<td>{format(new Date(finishDate), 'dd.MM.yyyy')}</td>
										</tr>
									)
								)
						)
					)
				)
			)}
		</>
	)
})

export default DepartmentReportData
