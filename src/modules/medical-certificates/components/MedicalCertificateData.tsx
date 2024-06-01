import { format } from 'date-fns'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import ActionButtons from '@/components/ActionButtons.tsx'
import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { IHealthGroup } from '@/modules/health-groups/types/health-group.types'
import { useCreateMedicalCertificateHistory } from '@/modules/medical-certificates/api/medical-certificate-history.queries.ts'
import { TypeMedicalCertificateHistoryForm } from '@/modules/medical-certificates/types/medical-certificate-history.types.ts'
import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types'
import useModal from '@/shared/hooks/useModal.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'
import daysUntilTheEnd from '@/shared/utils/daysUntilTheEnd.tsx'
import formatFullName from '@/shared/utils/formatFullName'
import getDaysUntilExpiry from '@/shared/utils/getDaysUntilExpiry.ts'
import getValidityPeriod from '@/shared/utils/getValidityPeriod.ts'

interface MedicalCertificateDataProps {
	data: IMedicalCertificate[] | undefined
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
	onEdit: (id: number | string, data: TypeMedicalCertificateForm) => void
	onDelete: (id: number | string) => void
	onHistory: (id: number | string) => void
	onInfo: (id: number | undefined) => void
}

const MedicalCertificateData: FC<MedicalCertificateDataProps> = ({
	data,
	healthGroups,
	physicalEducations,
	onDelete,
	onEdit,
	onHistory,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

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
				<NoData />
			) : (
				data?.map(
					({
						id,
						studentId,
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
								{formatFullName(
									student.surname,
									student.name,
									student.secondName
								)}
							</td>
							<td className={styles.cellPadding}>
								{student.group?.course?.department?.name || 'Не указано'}
							</td>
							<td className={styles.cellPadding}>
								{student.group?.course?.number || 'Не указано'}
							</td>
							<td className={styles.cellPadding}>
								{student.group?.name || 'Не указано'}
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
									<ActionButtons
										onHistory={onHistory}
										onDelete={() => setDeleteId(id)}
										onEdit={setEditId}
										onInfo={() => onInfo(studentId)}
										actionId={id}
									/>
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

export default MedicalCertificateData
