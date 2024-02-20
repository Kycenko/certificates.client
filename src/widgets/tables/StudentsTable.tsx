import { useGetGroups } from '@entities/Group/group.queries'
import {
	useCreateStudent,
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@entities/Student/student.queries.ts'
import { TypeStudentForm } from '@entities/Student/student.types.ts'
import Search from '@features/Search/Search.tsx'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { StudentHeads } from '@features/TableHeads.tsx'
import StudentData from '@features/data/StudentData'
import { useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	CustomSelect,
	ErrorMessage
} from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import DateSelect from '@shared/ui/selects/DateSelect.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const StudentsTable = () => {
	const navigate = useNavigate()
	const { students, isLoading, refetch } = useGetStudents()
	const { groups } = useGetGroups()
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch
	} = useForm<TypeStudentForm>()

	const { create } = useCreateStudent()
	const { update } = useUpdateStudent()
	const { remove } = useDeleteStudent()

	const handleCreate: SubmitHandler<TypeStudentForm> = async data => {
		const newData = { ...data, groupId: Number(data.groupId) || null }
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (id: number | string, data: TypeStudentForm) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	const handleInfo = (id: number | string) => {
		navigate(`/students/${id}`)
	}

	if (isLoading) return <Loader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<Search />
							<SortOrder />
						</div>
						<CustomButton
							className={styles.createBtn}
							onClick={openModal}
						>
							Добавить студента
						</CustomButton>
					</div>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={StudentHeads} />
						</thead>
						<tbody>
							<StudentData
								data={students}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
							/>
						</tbody>
					</table>
				</div>
			</div>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomInput
					label={'Фамилия'}
					id={'surname'}
					placeholder={'Введите фамилию'}
					{...register('surname', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.surname} />
				<CustomInput
					label={'Имя'}
					id={'name'}
					placeholder={'Введите имя'}
					{...register('name', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.name} />
				<CustomInput
					label={'Отчество'}
					id={'secondName'}
					placeholder={'Введите отчество'}
					{...register('secondName')}
				/>
				<ErrorMessage error={errors.secondName} />
				<DateSelect
					{...register('birthDate', { required: 'Обязательное поле' })}
					dateFormat='dd.MM.yyyy'
					selected={watch('birthDate')}
					onChange={(date: any) => setValue('birthDate', date)}
					maxDate={new Date()}
					id={'birthDate'}
					label={'Дата рождения'}
				/>
				<ErrorMessage error={errors.birthDate} />

				<CustomSelect
					id='groupId'
					label='Группа'
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
		</>
	)
}

export default StudentsTable
