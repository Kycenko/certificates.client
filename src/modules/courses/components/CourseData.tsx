import {FC} from 'react'
import {useForm} from 'react-hook-form'

import ActionButtons from '@/components/ActionButtons.tsx'
import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import {ICourse, TypeCourseForm} from '@/modules/courses/types/course.types.ts'
import {IDepartment} from '@/modules/departments/types/department.types.ts'
import CourseOptions from '@/shared/helpers/course.options.tsx'
import useModal from '@/shared/hooks/useModal.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

interface CourseDataProps {
	data: ICourse[] | undefined
	departments: IDepartment[] | undefined
	onEdit: (id: number | string, data: TypeCourseForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const CourseData: FC<CourseDataProps> = ({
	data,
	departments,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeCourseForm>()

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	const onSubmit = (id: number | string, data: TypeCourseForm) => {
		const newData = {
			...data,
			departmentId: Number(data.departmentId)
		}
		onEdit(id, newData)
		setEditId(null)
		reset()
	}

	if (!data || data.length === 0) return <NoData />
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(({ id, number, groups, department }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={styles.cellPadding}>
							<span>{number}</span>
						</td>
						<td className={styles.cellPadding}>
							<span>{department?.name}</span>
						</td>
						<td className={styles.cellPadding}>{groups?.length}</td>

						<td className={styles.editCellContainer}>
							<div className={styles.adminEditCell}>
								<ActionButtons
									actionId={id}
									onDelete={() => setDeleteId(id)}
									onEdit={() => setEditId(id)}
									onInfo={onInfo}
								/>
							</div>
						</td>
						<CustomModalForm
							onSubmit={handleSubmit(data => onSubmit(id, data))}
							isOpen={editId === id}
							onClose={() => {
								setEditId(null)
								reset()
							}}
							formTitle='Изменение'
							buttonTitle='Изменить'
						>
							<CustomSelect
								id='number'
								label='Выберите номер курса'
								defaultValue={number}
								{...register('number')}
							>
								<CourseOptions />
							</CustomSelect>

							<ErrorMessage error={errors.number} />
							<CustomSelect
								id='departmentId'
								label='Выберите отделение'
								defaultValue={department?.id}
								{...register('departmentId')}
							>
								{departments?.map(({ id, name }) => (
									<option
										key={id}
										value={id}
									>
										{name}
									</option>
								))}
							</CustomSelect>
						</CustomModalForm>
						<CustomModalForm
							onSubmit={() => handleDelete(id)}
							buttonTitle={'Удалить'}
							isOpen={deleteId === id}
							onClose={() => setDeleteId(null)}
							formTitle={'Удаление'}
						>
							{number}-й курс
						</CustomModalForm>
					</tr>
				))
			)}
		</>
	)
}

export default CourseData
