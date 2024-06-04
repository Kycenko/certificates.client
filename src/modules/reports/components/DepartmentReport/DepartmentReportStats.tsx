import { FC } from 'react'

import { IDepartmentReport } from '../../types/reports.types'

interface DepartmentReportStatsProps {
	data: IDepartmentReport[] | undefined
}

const DepartmentReportStats: FC<DepartmentReportStatsProps> = ({ data }) => {
	const currentDate = new Date()

	const studentsWithCertificates =
		data?.flatMap(department =>
			department.courses.flatMap(course =>
				course.groups.flatMap(group =>
					group.students.filter(
						student => student.medicalCertificates.length > 0
					)
				)
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

export default DepartmentReportStats
