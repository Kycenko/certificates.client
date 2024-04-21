import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'
import CustomButton from '@/components/ui/buttons/CustomButton.tsx'

import { TypeGroupForm } from '@/types/group.types.ts'

import Layout from '../../Layout/Layout.tsx'
import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import Heading from '../../ui/fields/Heading/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import CourseDetailsData from './CourseDetailsData.tsx'
import { DetailsCourseHeads } from './course-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import useModal from '@/lib/hooks/useModal.ts'
import { groupValidationSchema } from '@/lib/validation/validation.schema.ts'
import { useGetCourse } from '@/queries/course.queries.ts'
import { useCreateGroup } from '@/queries/group.queries.ts'

const CourseDetailsTable = () => {
	const { id } = useParams()

	const { course, isLoading, refetch } = useGetCourse(id)
	const { isOpen, closeModal, openModal } = useModal()
	const { create } = useCreateGroup()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setFocus
	} = useForm<TypeGroupForm>({
		mode: 'onChange',
		resolver: zodResolver(groupValidationSchema)
	})
	useEffect(() => {
		setFocus('name')
	}, [setFocus])

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
			<CustomButton
				variant='create'
				onClick={openModal}
			>
				Добавить группу
			</CustomButton>

			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsCourseHeads} />
				</thead>
				<tbody>
					<CourseDetailsData data={course} />
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name')}
				/>

				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
}

export default CourseDetailsTable
