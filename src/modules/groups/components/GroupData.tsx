import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import useAuth from '@/modules/auth/hooks/useAuth.ts'
import CourseOptions from '@/modules/courses/helpers/course.options.tsx'
import { IGroup, TypeGroupForm } from '@/modules/groups/types/group.types.ts'
import ActionButtons from '@/shared/components/ActionButtons'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import styles from '@/shared/styles/Tables.module.scss'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'
import { groupValidationSchema } from '@/shared/validation/validation.schema.ts'

interface GroupDataProps {
	data: IGroup[] | undefined
	onEdit: (id: number | string, data: TypeGroupForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const GroupData: FC<GroupDataProps> = ({ data, onDelete, onEdit, onInfo }) => {
	const navigate = useNavigate()
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const { user } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus
	} = useForm<TypeGroupForm>({
		mode: 'onChange',
		resolver: zodResolver(groupValidationSchema)
	})

	useEffect(() => {
		setFocus('name')
	})

	const handleEdit = (id: number | string) => {
		setEditId(id)
		reset()
	}

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	const onSubmit = (id: number | string, data: TypeGroupForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}

	return (
		<>
			{data?.map(({ id, name, students, course }) => (
				<>
					{user?.isAdmin ? (
						<tr
							className={styles.contentCell}
							key={id}
						>
							<td className={styles.cellPadding}>
								<span>{name}</span>
							</td>
							<td className={styles.cellPadding}>
								{`${course?.number}-й курс`}
							</td>
							<td className={styles.cellPadding}>{students?.length}</td>
							<td className={styles.editCellContainer}>
								<div className={styles.adminEditCell}>
									<ActionButtons
										onEdit={handleEdit}
										onDelete={() => setDeleteId(id)}
										actionId={id}
										onInfo={onInfo}
									/>
								</div>
							</td>
						</tr>
					) : (
						<tr
							key={id}
							onClick={() => navigate(`${PAGES_URL.GROUPS}/${id}`)}
							className={styles.userEditCell}
						>
							<td className={styles.cellPadding}>
								<span>{name}</span>
							</td>
							<td className={styles.cellPadding}>
								{`${course?.number}-й курс`}
							</td>
						</tr>
					)}
					<CustomModalForm
						onSubmit={handleSubmit(data => {
							const newData = {
								...data,
								courseId: Number(data.courseId)
							}
							onSubmit(id, newData)
						})}
						isOpen={editId === id}
						onClose={() => setEditId(null)}
						formTitle='Изменение'
						buttonTitle='Изменить'
					>
						<CustomInput
							id='name'
							label='Название'
							defaultValue={name}
							placeholder={'Введите название'}
							{...register('name')}
						/>
						<ErrorMessage error={errors.name} />
						<CustomSelect
							id='courseId'
							label='Выберите курс'
							defaultValue={course.number}
							{...register('courseId')}
						>
							<CourseOptions />
						</CustomSelect>
					</CustomModalForm>
					<CustomModalForm
						onSubmit={() => handleDelete(id)}
						buttonTitle={'Удалить'}
						isOpen={deleteId === id}
						onClose={() => setDeleteId(null)}
						formTitle={'Удаление'}
					>
						{name}
					</CustomModalForm>
				</>
			))}
		</>
	)
}

export default GroupData
