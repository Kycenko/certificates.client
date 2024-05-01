import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import CourseOptions from '@/modules/courses/helpers/course.options.tsx'
import { useCreateCourse } from '@/modules/courses/queries/course.queries.ts'
import { TypeCourseForm } from '@/modules/courses/types/course.types.ts'
import DepartmentDetailsData from '@/modules/departments/components/DepartmentDetailsData.tsx'
import { DetailsDepartmentHeads } from '@/modules/departments/components/department-heads.ts'
import { useGetDepartment } from '@/modules/departments/queries/department.queries.ts'
import DetailsTableHeads from '@/shared/components/tablesHeads/DetailsTableHeads.tsx'
import useModal from '@/shared/hooks/useModal.ts'
import styles from '@/shared/styles/DetailsTables.module.scss'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

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
	if (isLoading) return <CustomLoader />

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
