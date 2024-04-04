import { format } from 'date-fns'
import { History, Info, Pencil, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { IStudent, TypeStudentForm } from '@/types/student.types.ts'

import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'
import useSortAndFilterData from '@/hooks/useSortAndFilterData.ts'

import styles from '@/app/styles/Tables.module.scss'
import { saveStudentHistory } from '@/lib/utils/saveStudentHistory'
import updateHistory from '@/lib/utils/updateHistory.ts'
import { useGetGroups } from '@/queries/group.queries.ts'


interface StudentDataProps {
	data: IStudent[] | undefined
	onEdit: (id: number | string, data: TypeStudentForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
	onHistory: (id: number | string) => void
}

const StudentData: FC<StudentDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo,
	onHistory
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { groups } = useGetGroups()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>({ mode: 'onChange' })

	const onSubmit = (id: number | string, data: TypeStudentForm) => {
		const newData = { ...data, groupId: Number(data.groupId) }
		onEdit(id, newData)
		saveStudentHistory(id, data)
		setEditId(null)
		reset()
	}

	const { searchTerm, sortOrder } = useFilters()

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
							<td className={styles.cellPadding}>
								<span>{surname}</span>
							</td>
							<td className={styles.cellPadding}>
								<span>{name}</span>
							</td>
							<td className={styles.cellPadding}>
								<span>{secondName ? secondName : 'Не указано'}</span>
							</td>
							<td className={styles.cellPadding}>
								<span>{format(new Date(birthDate), 'dd.MM.yyyy')}</span>
							</td>
							<td className={styles.cellPadding}>
								{groups
									?.filter(({ id }) => id === groupId)
									.map(({ name }) => name)}
							</td>
							<td className={styles.editCellContainer}>
								<div className={styles.adminEditCell}>
									<CustomButton onClick={() => onHistory(id)}>
										<History />
									</CustomButton>
									<CustomButton
										onClick={() => {
											setEditId(id)
											reset()
										}}
									>
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
									defaultValue={groupId}
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
