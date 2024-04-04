import { Info, Pencil, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { PAGES_URL } from '@/constants/enums.ts'

import { IGroup, TypeGroupForm } from '@/types/group.types.ts'

import useAuth from '@/hooks/useAuth.ts'
import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'
import useSortAndFilterData from '@/hooks/useSortAndFilterData.ts'

import styles from '@/app/styles/Tables.module.scss'
import updateHistory from '@/lib/utils/updateHistory.ts'
import { useGetCourses } from '@/queries/course.queries.ts'


interface GroupDataProps {
	data: IGroup[] | undefined
	onEdit: (id: number | string, data: TypeGroupForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const GroupData: FC<GroupDataProps> = ({ data, onDelete, onEdit, onInfo }) => {
	const navigate = useNavigate()
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { courses } = useGetCourses()
	const { user } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeGroupForm>({ mode: 'onChange' })
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

	const { searchTerm, sortOrder } = useFilters()

	const { sortedData } = useSortAndFilterData(
		data as IGroup[],
		searchTerm,
		sortOrder
	)

	updateHistory(searchTerm, sortOrder)

	return (
		<>
			{!sortedData || sortedData.length === 0 ? (
				<tr>
					<td
						colSpan={2}
						className={styles.noData}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				sortedData?.map(({ id, name, courseId }) => (
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
									{courses
										?.filter(({ id }) => id === courseId)
										?.map(({ number }) => `${number}-й курс`)}
								</td>
								<td className={styles.editCellContainer}>
									<div className={styles.adminEditCell}>
										<CustomButton onClick={() => handleEdit(id)}>
											<Pencil />
										</CustomButton>
										<CustomButton onClick={() => onInfo(id)}>
											<Info />
										</CustomButton>
										<CustomButton onClick={() => setDeleteId(id)}>
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
									{courses
										?.filter(({ id }) => id === courseId)
										?.map(({ number }) => `${number}-й курс`)}
								</td>
							</tr>
						)}
						<CustomModalForm
							onSubmit={handleSubmit(data => onSubmit(id, data))}
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
								{...register('name', {
									required: 'Обязательное поле',
									minLength: { value: 5, message: 'Минимум 5 символов' },
									maxLength: { value: 5, message: 'Максимум 5 символов' }
								})}
							/>
							<ErrorMessage error={errors.name} />
							<CustomSelect
								id='courseId'
								label='Выберите курс'
								defaultValue={courseId}
								{...register('courseId')}
							>
								{courses?.map(({ id, number }) => (
									<option
										key={id}
										value={id}
									>
										{number}-й курс
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
							{name}
						</CustomModalForm>
					</>
				))
			)}
		</>
	)
}

export default GroupData
