import { Layout } from '@app/layout'
import { useGetGroup } from '@entities/Group/group.queries'
import { Heading } from '@shared/ui'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
const GroupDetailsPage = () => {
	const { id } = useParams()

	const { group } = useGetGroup(id)

	return (
		<Layout>
			<Heading title={'Описание группы'}>
				<span className='text-base text-gray-500'>{group?.name}</span>
			</Heading>

			<table className='min-w-full  border-gray-300'>
				<thead>
					<tr className='border'>
						<th className=' p-2'>Фамилия</th>
						<th className=' p-2'>Имя</th>
						<th className=' p-2'>Отчество</th>
						<th className=' p-2'>Дата рождения</th>
						<th className=' p-2'>Группа</th>
						<th className=' p-2'>Количество справок</th>
						<th className=' p-2'>Действительна ли справка?</th>
					</tr>
				</thead>
				<tbody>
					{group?.students?.map(
						({
							id,
							surname,
							name,
							secondName,
							birthDate,
							medicalCertificates
						}) => (
							<tr className='border hover:bg-gray-200 cursor-pointer' key={id}>
								<td className=' p-2'>{surname}</td>
								<td className=' p-2'>{name}</td>
								<td className='p-2'>{secondName}</td>
								<td className='p-2'>
									{format(new Date(birthDate), 'dd.MM.yyyy')}
								</td>
								<td className='p-2'>{group.name}</td>
								<td>{medicalCertificates?.length}</td>
								<td>
									{medicalCertificates.map(item => {
										const finishDate = new Date(item.finishDate)
										const currentDate = new Date()
										return finishDate > currentDate ? 'Да' : 'Нет'
									})}
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</Layout>
	)
}

export default GroupDetailsPage
