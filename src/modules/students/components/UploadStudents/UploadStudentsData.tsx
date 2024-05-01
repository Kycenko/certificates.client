import { format, parse } from 'date-fns'
import { FC, memo } from 'react'

import { IUploadStudent } from '@/modules/students/types/student.types.ts'
import NoData from '@/shared/components/NoData'

interface UploadStudentsDataProps {
	data: IUploadStudent[] | undefined
}
const UploadStudentsData: FC<UploadStudentsDataProps> = ({ data }) => {
	const correctFormatDate = (dateStr: any) => {
		return format(parse(dateStr, 'dd.MM.yyyy', new Date()), 'dd.MM.yyyy')
	}
	if (!data || data.length === 0) return <NoData />
	return (
		<>
			{data?.map(({ id, name, surname, secondName, birthDate }) => (
				<tr
					className='border'
					key={id}
				>
					<td className='p-2'>{surname}</td>
					<td className='p-2'>{name}</td>
					<td className='p-2'>{secondName ? secondName : 'Не указано'} </td>

					<td className='p-2'>{correctFormatDate(birthDate)}</td>
				</tr>
			))}
		</>
	)
}

export default memo(UploadStudentsData)
