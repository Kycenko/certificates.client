import { Layout } from '@app/layout'
import { useGetCourse } from '@entities/Course/course.queries'
import { useCreateGroup } from '@entities/Group/group.queries'
import { TypeGroupForm } from '@entities/Group/group.types'
import { useModal } from '@shared/hooks'
import { CustomInput, CustomModalForm, ErrorMessage, Heading } from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton'
import Loader from '@shared/ui/loader/CustomLoader'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const CourseDetailsPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { course, isLoading, refetch } = useGetCourse(id)
	const { isOpen, closeModal, openModal } = useModal()
	const { create } = useCreateGroup()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeGroupForm>()

	const handleCreate: SubmitHandler<TypeGroupForm> = async data => {
		const newData = { ...data, courseId: course?.id }
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}

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
			<CreateButton onClick={openModal}>Создать группу</CreateButton>

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
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name', { required: 'Обязательное поле' })}
				/>

				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</Layout>
	)
}

export default CourseDetailsPage
