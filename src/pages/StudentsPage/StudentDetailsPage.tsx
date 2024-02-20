import { Layout } from '@app/layout'
import { useGetStudent } from '@entities/Student/student.queries.ts'
import { Heading } from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { student, isLoading } = useGetStudent(id)

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)
	return (
		<Layout>
			<Heading title={'Описание учащегося'}>
				<span className='text-base text-gray-500'>
					{student?.surname} {student?.name} {student?.secondName}
				</span>
			</Heading>
			<table className='min-w-full border-gray-300'>
				<thead>
					<tr className='border'>
						<th className=' p-2'>Владелец</th>
						<th className=' p-2'>Дата начала</th>
						<th className=' p-2'>Дата окончания</th>
						<th className=' p-2'>Срок действия</th>
						<th className=' p-2'>Дней до конца действия</th>
						<th className=' p-2'>Группа здоровья</th>
						<th className=' p-2'>Группа по физкультуре</th>
						<th className=' p-2'>Действительна?</th>
					</tr>
				</thead>
				<tbody>
					{student?.medicalCertificates?.map(
						({ id, startDate, finishDate }) => (
							<tr
								onClick={() => navigate(`/courses/${id}`)}
								className='border hover:bg-gray-200 cursor-pointer'
								key={id}
							>
								<td>{student?.name}</td>
								<td className=' p-2'>
									{format(new Date(startDate), 'dd.MM.yyyy')}
								</td>
								<td className=' p-2'>
									{format(new Date(finishDate), 'dd.MM.yyyy')}
								</td>
								<td>1</td>
								<td>2</td>
								<td>
									{student?.medicalCertificates.map(item => item.healthGroupId)}
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</Layout>
	)
}

export default StudentDetailsPage
