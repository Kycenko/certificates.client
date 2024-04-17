import { format, parse } from 'date-fns'
import { FC } from 'react'

import { IUploadStudent } from '@/types/student.types'

interface UploadStudentsDataProps {
	data: IUploadStudent[] | undefined
}
const UploadStudentsData: FC<UploadStudentsDataProps> = ({ data }) => {
	const correctFormatDate = (dateStr: any) => {
		return format(parse(dateStr, 'dd.MM.yyyy', new Date()), 'dd.MM.yyyy')
	}
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
					{/* <td className='p-2'>{format(new Date(birthDate), 'yyyy-mm-dd')}</td> */}
					<td className='p-2'>{correctFormatDate(birthDate)}</td>
				</tr>
			))}
		</>
	)
}

export default UploadStudentsData
