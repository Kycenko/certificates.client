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
	let proposedEndDate

	if (isDurationSelected) {
		const durationMonths = parseInt(data.finishDate.toString())
		if (!isNaN(durationMonths)) {
			proposedEndDate = addMonths(new Date(), durationMonths)
		} else {
			return { error: 'Указана неверная продолжительность!' }
		}
	} else {
		proposedEndDate = new Date(data.finishDate)
	}

	let lastCertificateEndDate
	if (student?.medicalCertificates?.length) {
		lastCertificateEndDate = new Date(
			student.medicalCertificates[
				student.medicalCertificates.length - 1
			].finishDate
		)
	}

	if (lastCertificateEndDate && proposedEndDate <= lastCertificateEndDate) {
		alert(
			'Дата окончания новой справки должна быть позже даты окончания предыдущей справки.'
		)
		return { error: 'Invalid end date' }
	}

	data.finishDate = proposedEndDate
	return { data }
}
