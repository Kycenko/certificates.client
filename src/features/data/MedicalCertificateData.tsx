import {useGetHealthGroups} from '@entities/HealthGroup/health-group.query'
import {IMedicalCertificate, TypeMedicalCertificateForm} from '@entities/MedicalCertificate/medical-certificate.types'
import {useGetPhysicalEducations} from '@entities/PhysicalEducation/physical-education.queries'
import {useModal} from '@shared/hooks'
import {CustomButton, CustomModalForm, CustomSelect, ErrorMessage} from '@shared/ui'
import DateSelect from '@shared/ui/selects/DateSelect'
import daysUntilTheEnd from '@shared/utils/daysUntilTheEnd'
import getDaysUntilExpiry from '@shared/utils/getDaysUntilExpiry'
import getValidityPeriod from '@shared/utils/getValidityPeriod'
import {format} from 'date-fns'
import {FC} from 'react'
import {useForm} from 'react-hook-form'

import styles from '@shared/styles/Tables.module.scss'

interface MedicalCertificateDataProps {
	data: IMedicalCertificate[] | undefined
	onEdit: (id: number | string, data: TypeMedicalCertificateForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const MedicalCertificateData: FC<MedicalCertificateDataProps> = ({
	                                                                 data,
	                                                                 onDelete,
	                                                                 onEdit
                                                                 }) => {
	const {setDeleteId, deleteId, editId, setEditId} = useModal()
	const {healthGroups} = useGetHealthGroups()
	const {physicalEducations} = useGetPhysicalEducations()
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
		setValue
	} = useForm<TypeMedicalCertificateForm>()
	
	const handleEdit = (id: number | string, data: any) => {
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
				data?.map(({id, startDate, finishDate}) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
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
								
								<CustomButton onClick={() => setDeleteId(id)}>
									Удалить
								</CustomButton>
							</div>
						</td>
						<CustomModalForm
							onSubmit={handleSubmit(() => handleEdit(id, data))}
							isOpen={editId === id}
							onClose={() => setEditId(null)}
							formTitle='Изменение'
							buttonTitle='Изменить'
						>
							<DateSelect
								id='startDate'
								dateFormat='dd.MM.yyyy'
								label='Выберите дату начала'
								selected={startDate}
								{...register('startDate', {required: 'Обязательное поле'})}
								onChange={(date: any) => setValue('startDate', date)}
							/>
							<ErrorMessage error={errors.startDate}/>
							<DateSelect
								id='finishDate'
								dateFormat='dd.MM.yyyy'
								label='Выберите дату окончания'
								selected={finishDate}
								{...register('finishDate', {required: 'Обязательное поле'})}
								onChange={(date: any) => setValue('finishDate', date)}
							/>
							<ErrorMessage error={errors.finishDate}/>
							<CustomSelect
								id='healthGroupId'
								label='Выберите группу здоровья'
								{...register('healthGroupId', {
									required: 'Обязательное поле'
								})}
							>
								{physicalEducations?.map(({id, name}) => (
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
								{healthGroups?.map(({id, name}) => (
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
							onSubmit={() => {
								onDelete(id)
								setDeleteId(null)
							}}
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
