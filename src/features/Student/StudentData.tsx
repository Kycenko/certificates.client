import { IStudent, TypeStudentForm } from '@entities/Student/student.types'
import { selectSearchTerm } from '@features/Search/search.slice'
import { selectSortOrder } from '@features/SortOrder/sort.slice'
import { useAppSelector, useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	ErrorMessage
} from '@shared/ui'
import DateSelect from '@shared/ui/selects/DateSelect'
import { updateHistory } from '@shared/utils'
import { format } from 'date-fns'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

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
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue
	} = useForm<TypeStudentForm>()

	const searchTerm = useAppSelector(selectSearchTerm)
	const sortOrder = useAppSelector(selectSortOrder)

	const filteredData = data?.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	)
	const sortedData = filteredData?.sort((a, b) => {
		return sortOrder === 'asc'
			? a.name.localeCompare(b.name)
			: b.name.localeCompare(a.name)
	})

	if (!sortedData || sortedData.length === 0) {
		return (
			<tr>
				<td
					colSpan={2}
					className='px-6 py-4 text-center'
				>
					Данные не найдены
				</td>
			</tr>
		)
	}
	updateHistory(searchTerm, sortOrder)

	return (
		<>
			{filteredData?.map(({ id, name, surname, secondName, birthDate }) => (
				<tr key={id}>
					<td>
						<span>{surname}</span>
					</td>
					<td>
						<span>{name}</span>
					</td>
					<td>
						<span>{secondName}</span>
					</td>
					<td>
						<span>{format(new Date(birthDate), 'dd.MM.yyyy')}</span>
					</td>
					<td className='flex justify-end px-6 py-4'>
						<div className='flex items-center space-x-2'>
							<CustomButton
								onClick={() => {
									setEditId(id)
									reset()
								}}
							>
								Изменить
							</CustomButton>
							<CustomButton onClick={() => onInfo(id)}>Подробнее</CustomButton>
							<CustomButton onClick={() => setDeleteId(id)}>
								Удалить
							</CustomButton>
						</div>
					</td>
					<CustomModalForm
						onSubmit={handleSubmit(data => {
							onEdit(id, data)
							setEditId(null)
							reset()
						})}
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
							{...register('surname', { required: 'Обязательное поле' })}
						/>
						<ErrorMessage error={errors.surname} />
						<CustomInput
							label={'Имя'}
							id={'name'}
							defaultValue={name}
							placeholder={'Введите имя'}
							{...register('name', { required: 'Обязательное поле' })}
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
						<DateSelect
							{...register('birthDate', { required: 'Обязательное поле' })}
							dateFormat='dd.MM.yyyy'
							selected={birthDate}
							onChange={(date: any) => setValue('birthDate', date)}
							maxDate={new Date()}
							id={'birthDate'}
							label={'Дата рождения'}
						/>
						<ErrorMessage error={errors.birthDate} />
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
			))}
		</>
	)
}

export default StudentData
