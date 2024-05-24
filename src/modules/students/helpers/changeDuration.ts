import { addMonths } from 'date-fns'

import { IStudent } from '../types/student.types'

import { TypeMedicalCertificateForm } from '@/modules/medical-certificates/types/medical-certificate.types'

export const changeDuration = ({
	data,
	student,
	isDurationSelected
}: {
	data: TypeMedicalCertificateForm
	student: IStudent | undefined
	isDurationSelected: boolean
}) => {
	if (!student || !data.startDate) {
		return { error: 'Студент или дата начала не определена!' }
	}

	const startDate = new Date(data.startDate)

	let proposedEndDate
	if (isDurationSelected) {
		const durationMonths = parseInt(data.finishDate.toString())
		if (!isNaN(durationMonths)) {
			proposedEndDate = addMonths(startDate, durationMonths)
		} else {
			return { error: 'Указана неверная продолжительность!' }
		}
	} else {
		proposedEndDate = new Date(data.finishDate)
	}

	let lastCertificateEndDate
	if (student.medicalCertificates && student.medicalCertificates.length) {
		lastCertificateEndDate = new Date(
			student.medicalCertificates[
				student.medicalCertificates.length - 1
			].finishDate
		)
	}

	// Добавляем проверку на дату начала новой справки
	if (lastCertificateEndDate && startDate <= lastCertificateEndDate) {
		alert(
			'Дата начала новой справки должна быть позже даты окончания предыдущей справки.'
		)
		return { error: 'Invalid start date' }
	}

	// Проверка даты окончания остается прежней
	if (lastCertificateEndDate && proposedEndDate <= lastCertificateEndDate) {
		alert(
			'Дата окончания новой справки должна быть позже даты окончания предыдущей справки.'
		)
		return { error: 'Invalid end date' }
	}

	// Если все проверки пройдены успешно, возвращаем обновленные данные
	data.finishDate = proposedEndDate
	return { data }
}
