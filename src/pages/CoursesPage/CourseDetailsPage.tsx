import { Layout } from '@app/layout'
import { useGetCourse } from '@entities/Course'
import { TypeGroupForm, useCreateGroup } from '@entities/Group'
import { DetailsTableHeads } from '@features/heads'
import { DetailsCourseHeads, PAGES_URL } from '@shared/config'
import { useModal } from '@shared/hooks'
import {
	CreateButton,
	CustomInput,
	CustomLoader,
	CustomModalForm,
	ErrorMessage,
	Heading
} from '@shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

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
				<CustomLoader />
			</Layout>
		)

	return (
		<Layout>
			<Heading title='Описание курса'>
				<span className={styles.title}>{course?.number}-й Курс</span>
			</Heading>
			<CreateButton onClick={openModal}>Создать группу</CreateButton>

			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsCourseHeads} />
				</thead>
				<tbody>
					{course?.groups?.map(({ id, name, students }) => (
						<tr
							onClick={() => navigate(`${PAGES_URL.GROUPS}/${id}`)}
							className={styles.cell}
							key={id}
						>
							<td className={'p-2'}>{name}</td>
							<td className={'p-2'}>{students ? students.length : 0}</td>
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
