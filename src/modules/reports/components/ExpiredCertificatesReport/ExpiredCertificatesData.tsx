import { format } from 'date-fns'
import { FC } from 'react'

import { IExpiredCertificatesReport } from '../../types/reports.types'

import NoData from '@/shared/components/NoData'
import formatFullName from '@/shared/utils/formatFullName'

interface ExpiredCertificatesDataProps {
	data: IExpiredCertificatesReport[] | undefined
}

const ExpiredCertificatesData: FC<ExpiredCertificatesDataProps> = ({
	data
}) => {
	if (!data || data.length === 0) return <NoData />
	return (
		<>
			{data?.map(({ id, surname, name, secondName, birthDate, group }) => (
				<tr
					className='border'
					key={`${id}-${secondName}-${name}-${surname}`}
				>
					<td className='p-2'>{formatFullName(surname, name, secondName)}</td>
					<td className='p-2'>{format(new Date(birthDate), 'dd.MM.yyyy')}</td>
					<td className='p-2'>
						{group?.course?.department?.name || 'Не указано'}
					</td>
					<td className='p-2'>
						{group?.course?.number || 'Не указано'}-й курс
					</td>
					<td className='p-2'>{group?.name || 'Не указано'} </td>
				</tr>
			))}
		</>
	)
}

export default ExpiredCertificatesData
