import { Eye, PencilLine, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { ICourse, TypeCourseForm } from '@/types/course.types.ts'

import CourseOptions from '@/lib/config/course.options'

import useModal from '@/hooks/useModal.ts'

import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/queries/department.queries.ts'

interface CourseDataProps {
	data: ICourse[] | undefined
	onEdit: (id: number | string, data: TypeCourseForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const CourseData: FC<CourseDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { departments } = useGetDepartments()
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

	return (
		<>
			{!data || data.length === 0 ? (
				<tr>
					<td
						colSpan={2}
						className={styles.noData}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				data.map(({ id, number, departmentId, groups }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={styles.cellPadding}>
							<span>{number}-й курс</span>
						</td>
						<td className={styles.cellPadding}>
							<span>
								{departments
									?.filter(({ id }) => id === departmentId)
									?.map(({ name }) => name)}
							</span>
						</td>
						<td className={styles.cellPadding}>{groups?.length}</td>

						<td className={styles.editCellContainer}>
							<div className={styles.adminEditCell}>
								<CustomButton
									className={styles.iconBtn}
									onClick={() => setEditId(id)}
								>
									<PencilLine />
								</CustomButton>
								<CustomButton
									className={styles.iconBtn}
									onClick={() => onInfo(id)}
								>
									<Eye />
								</CustomButton>
								<CustomButton
									className={styles.iconBtn}
									onClick={() => setDeleteId(id)}
								>
									<Trash2 />
								</CustomButton>
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
								defaultValue={departmentId}
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
							{number}
						</CustomModalForm>
					</tr>
				))
			)}
		</>
	)
}

export default CourseData
