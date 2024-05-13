import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import ActionButtons from '@/components/ActionButtons.tsx'
import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { IGroup } from '@/modules/groups/types'
import { useCreateStudentHistory } from '@/modules/students/api/student-history.queries.ts'
import { TypeStudentHistoryForm } from '@/modules/students/types/student-history.types.ts'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'
import { studentValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomCheckBox from '@/shared/ui/inputs/CustomCheckBox/CustomCheckBox'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

interface StudentDataProps {
	data: IStudent[] | undefined
	groups: IGroup[] | undefined
	onEdit: (id: number | string, data: TypeStudentForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
	onHistory: (id: number | string) => void
}

const StudentData: FC<StudentDataProps> = ({
	data,
	groups,
	onDelete,
	onEdit,
	onInfo,
	onHistory
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

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
		}

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
				<NoData />
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
								<span>
									{surname} {name} {secondName}
								</span>
							</td>

							<td className={styles.cellPadding}>
								<span>{format(new Date(birthDate), 'dd.MM.yyyy')}</span>
							</td>
							<td className={styles.cellPadding}>
								{group?.course?.department?.name
									? group?.course?.department?.name
									: 'Не указано'}
							</td>
							<td className={styles.cellPadding}>
								{group?.course?.number
									? `${group?.course?.number}-й курс`
									: 'Не указано'}
							</td>
							<td className={styles.cellPadding}>
								{group?.name ? group?.name : 'Не указано'}
							</td>
							<td className={styles.cellPadding}>
								{medicalCertificates?.length}
							</td>
							<td className={styles.cellPadding}>
								{isExpelled === true ? (
									<div className='badge bg-red-300'>Да</div>
								) : (
									<div className='badge bg-green-300'>Нет</div>
								)}
							</td>

							<td className={styles.editCellContainer}>
								<div className={styles.adminEditCell}>
									<ActionButtons
										actionId={id}
										onEdit={() => {
											setEditId(id)
											reset()
										}}
										onDelete={() => setDeleteId(id)}
										onHistory={() => onHistory(id)}
										onInfo={() => onInfo(id)}
									/>
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
								<CustomCheckBox
									id={'isExpelled'}
									label={'Отчислен?'}
									defaultChecked={isExpelled}
									{...register('isExpelled')}
								/>
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
