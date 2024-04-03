import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import { useGetStudentsCertificatesWithDepartment } from '@/queries/statistics.queries'

const GetStudentsCertificatesWithDepartment = () => {
	const { id } = useParams()

	const { data } = useGetStudentsCertificatesWithDepartment(id)
	console.log(data)
	return (
		<div>
			{data &&
				data?.map(department => (
					<div key={department.id}>
						{department.name}
						{department.courses?.map(course => (
							<ul key={course.id}>
								{course.groups?.map(group => (
									<div key={group.id}>
										{group.students?.map(student => (
											<div key={student.id}>
												<h4>{student.name}</h4>
												<ul>
													{student.medicalCertificates?.map(certificate => (
														<li key={certificate.id}>
															{format(
																new Date(certificate.startDate),
																'dd.MM.yyyy'
															)}
															{format(
																new Date(certificate.finishDate),
																'dd.MM.yyyy'
															)}
															{certificate.healthGroup?.name}
															{certificate.physicalEducation?.name}
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								))}
							</ul>
						))}
					</div>
				))}
		</div>
	)
}

export default GetStudentsCertificatesWithDepartment
