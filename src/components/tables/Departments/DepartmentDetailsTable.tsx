import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'
import CustomButton from '@/components/ui/buttons/CustomButton.tsx'

import { TypeCourseForm } from '@/types/course.types.ts'

import Layout from '../../Layout/Layout.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'
import CustomSelect from '../../ui/selects/CustomSelect.tsx'

import DepartmentDetailsData from './DepartmentDetailsData.tsx'
import { DetailsDepartmentHeads } from './department-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import CourseOptions from '@/lib/config/course.options.tsx'
import useModal from '@/lib/hooks/useModal.ts'
import { useCreateCourse } from '@/queries/course.queries.ts'
import { useGetDepartment } from '@/queries/department.queries.ts'

const DepartmentDetailsTable = () => {
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
}

export default DepartmentDetailsTable
