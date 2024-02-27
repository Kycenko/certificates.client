import { useGetGroups } from '@entities/Group'
import { IStudent, TypeStudentForm } from '@entities/Student'
import { setStudentHistory } from '@features/ChangeHistory'
import { selectSearchTerm } from '@features/Search'
import { selectSortOrder } from '@features/SortOrder'
import {
	useAppDispatch,
	useAppSelector,
	useModal,
	useSortAndFilterData
} from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	CustomSelect,
	ErrorMessage
} from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { format } from 'date-fns'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@shared/styles/Tables.module.scss'

interface StudentDataProps {
	data: IStudent[] | undefined
	onEdit: (id: number | string, data: TypeStudentForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}
const StudentData: FC<StudentDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo
}) => {
	const dispatch = useAppDispatch()
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { groups } = useGetGroups()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>({ mode: 'onChange' })

	const onSubmit = (id: number | string, data: TypeStudentForm) => {
		const oldData = data
		console.log(oldData, 'old')

		const newData = { ...data, groupId: Number(data.groupId) }
		onEdit(id, newData)
		console.log(newData, 'new')
		if (oldData) dispatch(setStudentHistory({ id, oldData, newData }))

		setEditId(null)
		reset()
	}
	const history = useAppSelector(state => state.studentHistory.history)
	console.log(history)
	const searchTerm = useAppSelector(selectSearchTerm)
	const sortOrder = useAppSelector(selectSortOrder)

	const { sortedData } = useSortAndFilterData(
		data as IStudent[],
		searchTerm,
		sortOrder
	)

	updateHistory(searchTerm, sortOrder)

	return (
		<>
			{!sortedData || sortedData.length === 0 ? (
				<tr>
					<td
						colSpan={5}
						className={styles.noData}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				sortedData?.map(
					({ id, name, surname, secondName, birthDate, groupId }) => (
						<tr
							className={styles.contentCell}
							key={id}
						>
							<td>
								<span>{surname}</span>
							</td>
							<td>
								<span>{name}</span>
							</td>
							<td>
								<span>{secondName ? secondName : 'Не указано'}</span>
							</td>
							<td>
								<span>{format(new Date(birthDate), 'dd.MM.yyyy')}</span>
							</td>
							<td>
								{groups
									?.filter(({ id }) => id === groupId)
									.map(({ name }) => name)}
							</td>
							<td className={styles.editCellContainer}>
								<div className={styles.adminEditCell}>
									<CustomButton
										onClick={() => {
											setEditId(id)
											reset()
										}}
									>
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
							<CustomModalForm
								onSubmit={handleSubmit(data => onSubmit(id, data))}
								isOpen={editId === id}
								onClose={() => setEditId(null)}
								formTitle='Изменение'
								buttonTitle='Изменить'
							>
								<CustomInput
									label={'Фамилия'}
									id={'surname'}
									defaultValue={surname}
									placeholder={'Введите фамилию'}
									{...register('surname', {
										required: 'Обязательное поле',
										minLength: { value: 5, message: 'Минимум 5 символов' },
										maxLength: { value: 30, message: 'Максимум 30 символов' }
									})}
								/>
								<ErrorMessage error={errors.surname} />
								<CustomInput
									label={'Имя'}
									id={'name'}
									defaultValue={name}
									placeholder={'Введите имя'}
									{...register('name', {
										required: 'Обязательное поле',
										minLength: { value: 3, message: 'Минимум 3 символа' },
										maxLength: { value: 30, message: 'Максимум 30 символов' }
									})}
								/>
								<ErrorMessage error={errors.name} />
								<CustomInput
									label={'Отчество'}
									id={'secondName'}
									defaultValue={secondName}
									placeholder={'Введите отчество'}
									{...register('secondName')}
								/>
								<ErrorMessage error={errors.secondName} />
								<CustomInput
									id='birthDate'
									label='Выберите дату рождения'
									type='date'
									max={format(new Date(), 'yyyy-MM-dd')}
									defaultValue={format(new Date(birthDate), 'yyyy-MM-dd')}
									{...register('birthDate', { required: 'Обязательное поле' })}
								/>
								<ErrorMessage error={errors.birthDate} />
								<CustomSelect
									id='groupId'
									label='Выберите группу'
									{...register('groupId')}
								>
									{groups?.map(({ id, name }) => (
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
								onSubmit={() => {
									onDelete(id)
									setDeleteId(null)
								}}
								buttonTitle={'Удалить'}
								isOpen={deleteId === id}
								onClose={() => setDeleteId(null)}
								formTitle={'Удаление'}
							>
								{name}
							</CustomModalForm>
						</tr>
					)
				)
			)}
		</>
	)
}

export default StudentData
