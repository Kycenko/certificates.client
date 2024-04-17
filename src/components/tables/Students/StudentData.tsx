import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { History, Info, Pencil, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { TypeStudentHistoryForm } from '@/types/student-history.types'
import { IStudent, TypeStudentForm } from '@/types/student.types.ts'

import useModal from '@/hooks/useModal.ts'

import styles from '@/app/styles/Tables.module.scss'
import { studentValidationSchema } from '@/lib/validation/validation.schema.ts'
import { useGetGroups } from '@/queries/group.queries.ts'
import { useCreateStudentHistory } from '@/queries/student-history.queries'

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
	const { create } = useCreateStudentHistory()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>({
		mode: 'onChange',
		resolver: zodResolver(studentValidationSchema)
	})

	const onSubmit = async (id: number | string, data: TypeStudentForm) => {
		const newData = {
			...data,
			groupId: Number(data.groupId)
			// isExpelled: data.isExpelled !== undefined
		}
		console.log(newData)
		const historyData = {
			studentId: Number(id),
			groupId: Number(data.groupId)
		}
		await create(historyData as TypeStudentHistoryForm)
		onEdit(id, newData)
		setEditId(null)
		reset()
	}

	return (
		<>
			{!data || data.length === 0 ? (
				<tr>
					<td
						colSpan={5}
						className={styles.noData}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				data?.map(
					({
						id,
						name,
						surname,
						secondName,
						birthDate,
						groupId,
						medicalCertificates,
						isExpelled,
						group
					}) => (
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
							<td className={styles.cellPadding}>{group?.name}</td>
							<td className={styles.cellPadding}>
								{medicalCertificates?.length} справок(а/и)
							</td>
							{/* <td className={styles.cellPadding}>
								{isExpelled === true ? 'Да' : 'Нет'}
							</td> */}

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
									{...register('surname')}
								/>
								<ErrorMessage error={errors.surname} />
								<CustomInput
									label={'Имя'}
									id={'name'}
									defaultValue={name}
									placeholder={'Введите имя'}
									{...register('name')}
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
									{...register('birthDate')}
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
								{/* <CustomSelect
									id='isExpelled'
									label='Отчислен?'
									defaultValue={String(isExpelled)}
									{...register('isExpelled', {
										setValueAs: value => (value === 'true' ? true : false)
									})}
								>
									<option value={'false'}>Нет</option>
									<option value={'true'}>Да</option>
								</CustomSelect> */}
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
