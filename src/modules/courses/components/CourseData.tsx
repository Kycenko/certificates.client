import { Eye, PencilLine, Trash2 } from 'lucide-react'
import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

import { ICourse, TypeCourseForm } from '@/modules/courses/types/course.types.ts'

import styles from '@/app/styles/Tables.module.scss'
import CourseOptions from '@/modules/courses/helpers/course.options.tsx'
import useModal from '@/shared/hooks/useModal.ts'

interface CourseDataProps {
	data: ICourse[] | undefined
	onEdit: (id: number | string, data: TypeCourseForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const CourseData: FC<CourseDataProps> = memo(
	({ data, onDelete, onEdit, onInfo }) => {
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

		if (!data || data.length === 0)
			return <div className={styles.noData}> Данные не найдены</div>

		return (
			<>
				{data.map(({ id, number, groups, department }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={styles.cellPadding}>
							<span>{number}-й курс</span>
						</td>
						<td className={styles.cellPadding}>
							<span>{department?.name}</span>
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
								defaultValue={department.name}
								{...register('departmentId')}
							>
								{data?.map(({ department }) => (
									<option
										key={department.id}
										value={department.name}
									>
										{department.name}
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
				))}
			</>
		)
	}
)

export default CourseData
