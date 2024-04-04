import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { DetailsCourseHeads } from '@/constants/table-heads.ts'

import { TypeGroupForm } from '@/types/group.types.ts'

import useModal from '@/hooks/useModal.ts'

import Layout from '../../Layout/Layout.tsx'
import CreateButton from '../../ui/buttons/CreateButton.tsx'
import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import { useGetCourse } from '@/queries/course.queries.ts'
import { useCreateGroup } from '@/queries/group.queries.ts'

const CourseDetailsTable = () => {
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
	} = useForm<TypeGroupForm>({ mode: 'onChange' })

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
		<>
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
							<td className={styles.cellPadding}>{name}</td>
							<td className={styles.cellPadding}>
								{students ? students.length : 0}
							</td>
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
					{...register('name', {
						required: 'Обязательное поле',
						minLength: { value: 5, message: 'Минимум 5 символов' },
						maxLength: { value: 5, message: 'Максимум 5 символов' }
					})}
				/>

				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
}

export default CourseDetailsTable
