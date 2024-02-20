import { Layout } from '@app/layout'
import { useGetDepartment } from '@entities/Department/department.queries'
import { Heading } from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader'
import { useNavigate, useParams } from 'react-router-dom'

const DepartmentDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { department, isLoading } = useGetDepartment(id)

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)

	return (
		<Layout>
			<Heading title={'Описание отделения'}>
				<span className='text-base text-gray-500'>{department?.name}</span>
			</Heading>

			<table className='min-w-full  border-gray-300'>
				<thead>
					<tr className='border justify-center text-center items-center'>
						<th className=' p-2'>Номер курса</th>
						<th className=' p-2'>Количество групп</th>
						<th className=' p-2'>Отделение</th>
					</tr>
				</thead>
				<tbody>
					{department?.courses?.map(({ id, number, groups }) => (
						<tr
							onClick={() => navigate(`/courses/${id}`)}
							className='border hover:bg-gray-200 cursor-pointer  justify-center text-center items-center'
							key={id}
						>
							<td className=' p-2'>{`${number} Курс`}</td>
							<td className=' p-2'>
								{groups ? groups.length : 'Группы не найдены'}
							</td>
							<td className='p-2'>{department.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	)
}

export default DepartmentDetailsPage
