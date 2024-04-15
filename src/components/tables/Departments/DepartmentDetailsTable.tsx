import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'

import { DetailsDepartmentHeads } from '@/constants/table-heads.ts'

import { TypeCourseForm } from '@/types/course.types.ts'

import CourseOptions from '@/config/course.options.tsx'

import useModal from '@/hooks/useModal.ts'

import Layout from '../../Layout/Layout.tsx'
import CreateButton from '../../ui/buttons/CreateButton.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'
import CustomSelect from '../../ui/selects/CustomSelect.tsx'

import DepartmentDetailsData from './DepartmentDetailsData.tsx'
import styles from '@/app/styles/DetailsTables.module.scss'
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
			<CreateButton onClick={openModal}>Добавить курс</CreateButton>
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
