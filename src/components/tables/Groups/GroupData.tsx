import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, PencilLine, Trash2 } from 'lucide-react'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput/CustomInput'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { IGroup, TypeGroupForm } from '@/types/group.types.ts'

import styles from '@/app/styles/Tables.module.scss'
import CourseOptions from '@/lib/config/course.options'
import { PAGES_URL } from '@/lib/constants/enums.ts'
import useAuth from '@/lib/hooks/useAuth.ts'
import useModal from '@/lib/hooks/useModal.ts'
import { groupValidationSchema } from '@/lib/validation/validation.schema.ts'

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
			{!data || data.length === 0 ? (
				<div className={styles.noData}>Данные не найдены</div>
			) : (
				data?.map(({ id, name, students, course }) => (
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
										<CustomButton
											className={styles.iconBtn}
											onClick={() => handleEdit(id)}
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
				))
			)}
		</>
	)
}

export default GroupData
