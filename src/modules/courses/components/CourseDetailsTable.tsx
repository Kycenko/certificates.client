import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tablesHeads/DetailsTableHeads.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import { useGetCourse } from '@/modules/courses/api/course.queries.ts'
import CourseDetailsData from '@/modules/courses/components/CourseDetailsData.tsx'
import { DetailsCourseHeads } from '@/modules/courses/components/course-heads.ts'
import { useCreateGroup } from '@/modules/groups/api/group.queries.ts'
import { TypeGroupForm } from '@/modules/groups/types/group.types.ts'
import { groupValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

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

	if (isLoading) return <CustomLoader />

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
