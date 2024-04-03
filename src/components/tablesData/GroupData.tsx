import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomButton from '@/components/ui/buttons/CustomButton'
import ErrorMessage from '@/components/ui/fields/ErrorMessage'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from '@/components/ui/inputs/CustomInput'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import { PAGES_URL } from '@/constants/enums'

import { IGroup, TypeGroupForm } from '@/types/group.types'

import useAuth from '@/hooks/useAuth'
import useFilters from '@/hooks/useFilters'
import useModal from '@/hooks/useModal'
import useSortAndFilterData from '@/hooks/useSortAndFilterData'

import updateHistory from '@/utils/updateHistory'

import styles from '@/app/styles/Tables.module.scss'
import { useGetCourses } from '@/queries/course.queries'

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
								<td>
									<span>{name}</span>
								</td>
								<td>
									{courses
										?.filter(({ id }) => id === courseId)
										?.map(({ number }) => `${number}-й курс`)}
								</td>
								<td className={styles.editCellContainer}>
									<div className={styles.adminEditCell}>
										<CustomButton onClick={() => handleEdit(id)}>
											Изменить
										</CustomButton>
										<CustomButton onClick={() => onInfo(id)}>
											Подробнее
										</CustomButton>
										<CustomButton onClick={() => setDeleteId(id)}>
											Удалить
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
