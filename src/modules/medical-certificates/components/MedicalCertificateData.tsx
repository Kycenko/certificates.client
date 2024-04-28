import { format } from 'date-fns'
import { History, PencilLine, Trash2 } from 'lucide-react'
import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@/shared/styles/Tables.module.scss'
import { useGetHealthGroups } from '@/modules/health-groups/queries/health-group.query.ts'
import { useCreateMedicalCertificateHistory } from '@/modules/medical-certificates/queries/medical-certificate-history.queries.ts'
import { TypeMedicalCertificateHistoryForm } from '@/modules/medical-certificates/types/medical-certificate-history.types.ts'
import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/queries/physical-education.queries.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'
import daysUntilTheEnd from '@/shared/utils/daysUntilTheEnd.ts'
import getDaysUntilExpiry from '@/shared/utils/getDaysUntilExpiry.ts'
import getValidityPeriod from '@/shared/utils/getValidityPeriod.ts'

interface MedicalCertificateDataProps {
	data: IMedicalCertificate[] | undefined
	onEdit: (id: number | string, data: TypeMedicalCertificateForm) => void
	onDelete: (id: number | string) => void
	onHistory: (id: number | string) => void
}

const MedicalCertificateData: FC<MedicalCertificateDataProps> = ({
	data,
	onDelete,
	onEdit,
	onHistory
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { healthGroups } = useGetHealthGroups()
	const { physicalEducations } = useGetPhysicalEducations()
	const { create } = useCreateMedicalCertificateHistory()
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

	const handleEdit = async (
		id: number | string,
		data: TypeMedicalCertificateForm
	) => {
		const newData = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: studentId
		}
		const historyData = {
			medicalCertificateId: Number(id),
			startDate: data.startDate,
			finishDate: data.finishDate,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId)
		}
		await create(historyData as TypeMedicalCertificateHistoryForm)
		onEdit(id, newData)

		setEditId(null)
		reset()
	}

	return (
		<>
			{!data || data.length === 0 ? (
				<div className={styles.noData}>Данные не найдены</div>
			) : (
				data?.map(
					({
						id,
						startDate,
						finishDate,
						healthGroupId,
						physicalEducationId,
						student
					}) => (
						<tr
							className={styles.contentCell}
							key={id}
						>
							<td className={styles.cellPadding}>
								{`${student?.surname} ${student?.name} ${student?.secondName ? student?.secondName : ''}`}
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
										className={styles.iconBtn}
										onClick={() => onHistory(id)}
									>
										<History />
									</CustomButton>
									<CustomButton
										className={styles.iconBtn}
										onClick={() => {
											setEditId(id)
											reset()
										}}
									>
										<PencilLine />
									</CustomButton>

									<CustomButton
										className={styles.iconBtn}
										onClick={() => setDeleteId(id)}
									>
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
									{...register('startDate')}
								/>
								<ErrorMessage error={errors.startDate} />
								<CustomInput
									id='finishDate'
									label='Выберите дату окончания'
									type='date'
									defaultValue={format(new Date(finishDate), 'yyyy-MM-dd')}
									{...register('finishDate')}
								/>
								<ErrorMessage error={errors.finishDate} />
								<CustomSelect
									id='healthGroupId'
									label='Выберите группу здоровья'
									defaultValue={healthGroupId}
									{...register('healthGroupId')}
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

								<CustomSelect
									id='physicalEducationId'
									label='Выберите группу по физкультуре'
									defaultValue={physicalEducationId}
									{...register('physicalEducationId')}
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
					)
				)
			)}
		</>
	)
}

export default memo(MedicalCertificateData)
