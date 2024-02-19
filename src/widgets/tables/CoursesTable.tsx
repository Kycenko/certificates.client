import { useCreateCourse, useDeleteCourse, useGetCourses, useUpdateCourse } from '@entities/Course/course.queries.ts'
import { TypeCourseForm } from '@entities/Course/course.types.ts'
import { useGetDepartments } from '@entities/Department/department.queries.ts'
import CourseData from '@features/Course/CourseData.tsx'

import SortOrder from '@features/SortOrder/SortOrder.tsx'
import { useModal } from '@shared/hooks'
import { CustomButton, CustomModalForm, CustomSelect, ErrorMessage } from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from '@shared/styles/Tables.module.scss'
import TableHeads, { CourseHeads } from '@features/TableHeads.tsx'

const CoursesTable = () => {
	const navigate = useNavigate()
	const { courses, isLoading, refetch } = useGetCourses()
	const { departments } = useGetDepartments()
	
	const { isOpen, openModal, closeModal } = useModal()
	
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeCourseForm>()
	
	const { create } = useCreateCourse()
	const { update } = useUpdateCourse()
	const { remove } = useDeleteCourse()
	
	const handleCreate: SubmitHandler<TypeCourseForm> = async (
		data: TypeCourseForm
	) => {
		const newData = {
			...data,
			number: Number(data.number),
			departmentId: Number(data.departmentId)
		}
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}
	
	const handleEdit = async (id: number | string, data: TypeCourseForm) => {
		await update({ id, data: { ...data, number: +data.number } })
		closeModal()
		await refetch()
	}
	
	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}
	
	const handleInfo = (id: number | string) => {
		navigate(`/courses/${id}`)
	}
	
	if (isLoading) return <Loader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer
				}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<SortOrder />
						</div>
						<CustomButton
							className={styles.createBtn}
							onClick={openModal}
						>
							Создать курс
						</CustomButton>
					</div>
					<table className={styles.table}>
						<thead>
						<TableHeads data={CourseHeads} />
						</thead>
						<tbody>
						<CourseData
							data={courses}
							onDelete={handleDelete}
							onEdit={handleEdit}
							onInfo={handleInfo}
						/>
						</tbody>
					</table>
				</div>
			</div>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomSelect
					id="number"
					label="Выберите номер курса"
					{...register('number', { required: 'Обязательное поле' })}
				>
					<option key={1} value={1}>
						1 курс
					</option>
					<option key={2} value={2}>
						2 курс
					</option>
					<option key={3} value={3}>
						3 курс
					</option>
					<option key={4} value={4}>
						4 курс
					</option>
				</CustomSelect>
				<CustomSelect
					id="departmentId"
					label="Выберите отделение"
					{...register('departmentId', { required: 'Обязательное поле' })}
				>
					{departments?.map(item => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</CustomSelect>
				<ErrorMessage error={errors.number} />
			</CustomModalForm>
		</>
	)
}

export default CoursesTable
