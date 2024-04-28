import { memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tablesHeads/DetailsTableHeads.tsx'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'

import { TypeCourseForm } from '@/modules/courses/types/course.types.ts'

import Layout from '@/app/Layout/Layout.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

import DepartmentDetailsData from '@/modules/departments/components/DepartmentDetailsData.tsx'
import { DetailsDepartmentHeads } from '@/modules/departments/components/department-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import CourseOptions from '@/modules/courses/helpers/course.options.tsx'
import useModal from '@/shared/hooks/useModal.ts'
import { useCreateCourse } from '@/modules/courses/queries/course.queries.ts'
import { useGetDepartment } from '@/modules/departments/queries/department.queries.ts'

const DepartmentDetailsTable = memo(() => {
	const { id } = useParams()

	const { department, isLoading, refetch } = useGetDepartment(id)

	const { isOpen, closeModal, openModal } = useModal()
	const { create } = useCreateCourse()
	const { register, handleSubmit, reset } = useForm<TypeCourseForm>()

	const handleCreate: SubmitHandler<TypeCourseForm> = async data => {
		const newData = {
			...data,
			departmentId: department?.id,
			number: Number(data.number)
		}
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
			<Heading title={'Описание отделения'}>
				<span className={styles.title}>{department?.name}</span>
			</Heading>
			<CustomButton
				variant='create'
				onClick={openModal}
			>
				Добавить курс
			</CustomButton>
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsDepartmentHeads} />
				</thead>
				<tbody>
					<DepartmentDetailsData data={department} />
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
			>
				<CustomSelect
					id='number'
					label='Выберите номер курса'
					{...register('number')}
				>
					<CourseOptions />
				</CustomSelect>
			</CustomModalForm>
		</>
	)
})

export default DepartmentDetailsTable
