import { FC } from 'react'

import { IGroupReport } from '../../types/reports.types'

interface GroupReportStatsProps {
	data: IGroupReport[] | undefined
}

const GroupReportStats: FC<GroupReportStatsProps> = ({ data }) => {
	const currentDate = new Date()

	const studentsWithCertificates =
		data?.flatMap(({ students }) =>
			students.filter(
				({ medicalCertificates }) => medicalCertificates.length > 0
			)
		) ?? []

	const totalStudents = studentsWithCertificates.length

	const { isValid, isNotValid } = studentsWithCertificates.reduce(
		(counts, student) => {
			student.medicalCertificates.forEach(certificate => {
				const finishDate = new Date(certificate.finishDate)
				finishDate < currentDate ? counts.isNotValid++ : counts.isValid++
			})
			return counts
		},
		{ isValid: 0, isNotValid: 0 }
	)

	return (
		<div className='flex flex-col items-center'>
			<div className='mb-2'>
				<p>
					Всего выбрано обучающихся: <b>{totalStudents}</b>
				</p>
				<p>
					Обучающиеся с действительной справкой: <b>{isValid}</b>
				</p>
				<p>
					Обучающиеся с недействительной справкой: <b>{isNotValid}</b>
				</p>
			</div>
		</div>
	)
}

export default GroupReportStats
