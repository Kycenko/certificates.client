import { format } from 'date-fns'
import { Pencil, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/types/medical-certificate.types.ts'

import useModal from '@/hooks/useModal.ts'

import styles from '@/app/styles/Tables.module.scss'
import daysUntilTheEnd from '@/lib/utils/daysUntilTheEnd.ts'
import getDaysUntilExpiry from '@/lib/utils/getDaysUntilExpiry.ts'
import getValidityPeriod from '@/lib/utils/getValidityPeriod.ts'
import { useGetHealthGroups } from '@/queries/health-group.query.ts'
import { useGetPhysicalEducations } from '@/queries/physical-education.queries.ts'
import { useGetStudents } from '@/queries/student.queries.ts'

interface MedicalCertificateDataProps {
	data: IMedicalCertificate[] | undefined
	onEdit: (id: number | string, data: TypeMedicalCertificateForm) => void
	onDelete: (id: number | string) => void
}

const MedicalCertificateData: FC<MedicalCertificateDataProps> = ({
	data,
	onDelete,
	onEdit
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { students } = useGetStudents()

	const studentId = data?.find(id => id.id === editId)?.studentId

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

	const handleEdit = (
		id: number | string,
		data: TypeMedicalCertificateForm
	) => {
		const newData = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: studentId
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
						<td className={styles.cellPadding}>
							{students
								?.filter(({ id }) => id === studentId)
								.map(
									({ name, surname, secondName }) =>
										`${surname} ${name} ${secondName}`
								)}
						</td>
						<td className={styles.cellPadding}>
							<span>{format(new Date(startDate), 'dd.MM.yyyy')}</span>
						</td>
						<td className={styles.cellPadding}>
							<span>{format(new Date(finishDate), 'dd.MM.yyyy')}</span>
						</td>
						<td className={styles.cellPadding}>
							{getValidityPeriod(finishDate, startDate)}
						</td>
						<td className={styles.cellPadding}>
							{getDaysUntilExpiry(finishDate, startDate)}
						</td>
						<td className={styles.cellPadding}>
							{daysUntilTheEnd(finishDate)}
						</td>

						<td className={styles.editCellContainer}>
							<div className={styles.adminEditCell}>
								<CustomButton
									onClick={() => {
										setEditId(id)
										reset()
									}}
								>
									<Pencil />
								</CustomButton>

								<CustomButton onClick={() => setDeleteId(id)}>
									<Trash2 />
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
