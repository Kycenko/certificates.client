import { format } from 'date-fns'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton'
import ErrorMessage from '@/components/ui/fields/ErrorMessage'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from '@/components/ui/inputs/CustomInput'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/types/medical-certificate.types'

import useModal from '@/hooks/useModal'

import daysUntilTheEnd from '@/utils/daysUntilTheEnd'
import getDaysUntilExpiry from '@/utils/getDaysUntilExpiry'
import getValidityPeriod from '@/utils/getValidityPeriod'

import styles from '@/app/styles/Tables.module.scss'
import { useGetHealthGroups } from '@/queries/health-group.query'
import { useGetPhysicalEducations } from '@/queries/physical-education.queries'
import { useGetStudents } from '@/queries/student.queries'

interface MedicalCertificateDataProps {
	data: IMedicalCertificate[] | undefined
	onEdit: (id: number | string, data: TypeMedicalCertificateForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const MedicalCertificateData: FC<MedicalCertificateDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { students } = useGetStudents()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeMedicalCertificateForm>()

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	useEffect(() => {})

	const handleEdit = (
		id: number | string,
		data: TypeMedicalCertificateForm
	) => {
		const newData = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId)
		}
		onEdit(id, newData)
		setEditId(null)
		reset()
	}

	return (
		<>
			{!data || data.length === 0 ? (
				<tr>
					<td
						className={styles.noData}
						colSpan={2}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				data?.map(({ id, startDate, finishDate, studentId }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td>
							{students
								?.filter(({ id }) => id === studentId)
								.map(
									({ name, surname, secondName }) =>
										`${surname} ${name} ${secondName}`
								)}
						</td>
						<td>
							<span>{format(new Date(startDate), 'dd.MM.yyyy')}</span>
						</td>
						<td>
							<span>{format(new Date(finishDate), 'dd.MM.yyyy')}</span>
						</td>
						<td>{getValidityPeriod(finishDate, startDate)}</td>
						<td>{getDaysUntilExpiry(finishDate, startDate)}</td>
						<td>{daysUntilTheEnd(finishDate)}</td>

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
							onSubmit={handleSubmit(data => handleEdit(id, data))}
							isOpen={editId === id}
							onClose={() => setEditId(null)}
							formTitle='Изменение'
							buttonTitle='Изменить'
						>
							<CustomInput
								id='startDate'
								label='Выберите дату начала'
								type='date'
								defaultValue={format(new Date(startDate), 'yyyy-MM-dd')}
								{...register('startDate', { required: 'Обязательное поле' })}
							/>
							<ErrorMessage error={errors.startDate} />
							<CustomInput
								id='finishDate'
								label='Выберите дату окончания'
								type='date'
								defaultValue={format(new Date(finishDate), 'yyyy-MM-dd')}
								{...register('finishDate', { required: 'Обязательное поле' })}
							/>
							<ErrorMessage error={errors.finishDate} />
							<CustomSelect
								id='healthGroupId'
								label='Выберите группу здоровья'
								{...register('healthGroupId', {
									required: 'Обязательное поле'
								})}
							>
								{physicalEducations?.map(({ id, name }) => (
									<option
										value={id}
										key={id}
									>
										{name}
									</option>
								))}
							</CustomSelect>

							<CustomSelect
								id='physicalEducationId'
								label='Выберите группу по физкультуре'
								{...register('physicalEducationId', {
									required: 'Обязательное поле'
								})}
							>
								{healthGroups?.map(({ id, name }) => (
									<option
										value={id}
										key={id}
									>
										{name}
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
							<p>Дата начала: {format(new Date(startDate), 'dd.MM.yyyy')}</p>
							<p>
								Дата окончания: {format(new Date(finishDate), 'dd.MM.yyyy')}
							</p>
						</CustomModalForm>
					</tr>
				))
			)}
		</>
	)
}

export default MedicalCertificateData