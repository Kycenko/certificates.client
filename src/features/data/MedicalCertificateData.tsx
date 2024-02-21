import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@entities/MedicalCertificate/medical-certificate.types'
import { selectSearchTerm } from '@features/Search/search.slice'
import { selectSortOrder } from '@features/SortOrder/sort.slice'
import { useAppSelector, useModal } from '@shared/hooks'
import { CustomButton, CustomModalForm } from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { format } from 'date-fns'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

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
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeMedicalCertificateForm>()

	const searchTerm = useAppSelector(selectSearchTerm)
	const sortOrder = useAppSelector(selectSortOrder)

	if (!data || data.length === 0) {
		return (
			<tr>
				<td
					className={styles.noData}
					colSpan={2}
				>
					Данные не найдены
				</td>
			</tr>
		)
	}
	updateHistory(searchTerm, sortOrder)

	const getValidityPeriod = (finishDate: Date, startDate: Date) => {
		const start = new Date(startDate)
		const finish = new Date(finishDate)

		let months
		months = (finish.getFullYear() - start.getFullYear()) * 12
		months -= start.getMonth()
		months += finish.getMonth()
		return `${months === 0 ? 'Текущий месяц' : `${months} месяц(а/ев)`}`
	}

	const getDaysUntilExpiry = (finishDate: any, startDay: any) => {
		const start = new Date(startDay) as any
		const end = new Date(finishDate) as any

		const diffTime = Math.abs(end - start)
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

		return diffDays
	}

	const daysUntilTheEnd = (date: Date) => {
		const finishDate = new Date(date)
		const currentDate = new Date()

		return finishDate > currentDate ? 'Да' : 'Нет'
	}
	return (
		<>
			{data?.map(({ id, startDate, finishDate }) => (
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
						<div className={styles.editCell}>
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
						f
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
						f
					</CustomModalForm>
				</tr>
			))}
		</>
	)
}

export default MedicalCertificateData
