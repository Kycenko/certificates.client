import { Layout } from '@app/layout'
import { useGetCourse } from '@entities/Course/course.queries'
import { Heading } from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader'
import { useNavigate, useParams } from 'react-router-dom'

const CourseDetailsPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { course, isLoading } = useGetCourse(id)

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)

	return (
		<Layout>
			<Heading title='Описание курса'>
				<span className='text-base text-gray-500'>{course?.number}-й Курс</span>
			</Heading>

			<table className='min-w-full  border-gray-300'>
				<thead>
					<tr className='border'>
						<th className=' p-2'>Группа</th>
						<th className=' p-2'>Количество студентов</th>
						<th className=' p-2'>Курс</th>
					</tr>
				</thead>
				<tbody>
					{course?.groups?.map(({ id, name, students }) => (
						<tr
							onClick={() => navigate(`/groups/${id}`)}
							className='border hover:bg-gray-200 cursor-pointer  justify-center text-center items-center'
							key={id}
						>
							<td className=' p-2'>{name}</td>
							<td>{students ? students.length : 0}</td>
							<td>{course.number}-й Курс</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	)
}

export default CourseDetailsPage
