import { FC } from 'react'

interface ReportStatsProps {
	data: any[] | undefined
}

const ReportStats: FC<ReportStatsProps> = ({ data }) => {
	const currentDate = new Date()

	const studentsWithCertificates =
		data?.flatMap(department =>
			department.courses.flatMap((course: any) =>
				course.groups.flatMap((group: any) =>
					group.students.filter(
						(student: any) => student.medicalCertificates.length > 0
					)
				)
			)
		) ?? []

	const totalStudents = studentsWithCertificates.length

	const { isValid, isNotValid } = studentsWithCertificates.reduce(
		(counts, student) => {
			student.medicalCertificates.forEach((certificate: any) => {
				const finishDate = new Date(certificate.finishDate)
				finishDate < currentDate ? counts.isNotValid++ : counts.isValid++
			})
			return counts
		},
		{ isValid: 0, isNotValid: 0 }
	)

	return (
		<div className='flex flex-col items-start'>
			<div className='ml-5'>
				<p>Всего выбрано обучающихся: {totalStudents}</p>
				<p>Обучающиеся с действительной справкой: {isValid}</p>
				<p>Обучающиеся с недействительной справкой: {isNotValid}</p>
			</div>
			<hr className='my-3 h-[1.5px] bg-gray-400 bg-opacity-20 w-full' />
		</div>
	)
}

export default ReportStats
