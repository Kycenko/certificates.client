import { FC } from 'react'

import NoData from '@/components/NoData.tsx'

import correctFormatDate from '../../helpers/correctFormatDate'

import { IUploadStudent } from '@/modules/students/types/student.types.ts'

interface UploadStudentsDataProps {
	data: IUploadStudent[] | undefined
}

const UploadStudentsData: FC<UploadStudentsDataProps> = ({ data }) => {
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(({ id, name, surname, secondName, birthDate }) => (
					<tr
						className='border'
						key={`${id}-${secondName}-${name}-${surname}`}
					>
						<td className='p-2'>{surname}</td>
						<td className='p-2'>{name}</td>
						<td className='p-2'>{secondName ? secondName : 'Не указано'}</td>
						<td className='p-2'>{correctFormatDate(birthDate)}</td>
					</tr>
				))
			)}
		</>
	)
}

export default UploadStudentsData
