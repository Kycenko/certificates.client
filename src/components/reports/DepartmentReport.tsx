import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import usePrint from '@/hooks/usePrint'

import Layout from '../Layout/Layout'

import styles from '@/app/styles/Tables.module.scss'
import formatFullName from '@/lib/utils/formatFullName'
import { useGetDepartmentReport } from '@/queries/statistics.queries'

const DepartmentReport = () => {
	const { id } = useParams()
	const { data } = useGetDepartmentReport(id)
	const departmentName = data?.map(({ name }) => <p>{name}</p>)
	const { printRef, handlePrint } = usePrint({
		documentTitle: `department-report-${id}`
	})
	console.log(data)
	return (
		<Layout>
			<div>
				<div className={'justify-center'}>
					<div className={'mb-2 flex justify-center'}>
						<img
							src='/logo.webp'
							alt='Logo'
						/>
					</div>

					<div className='justify-center flex'>
						<button
							className='p-2 bg-red-500 text-white rounded-md mb-4'
							onClick={handlePrint}
						>
							Экспорт в PDF
						</button>
					</div>
				</div>
				<div ref={printRef}>
					<div className='text-center '>
						Частное учреждение образования "Колледж бизнеса и права"
					</div>
					<div className='justify-center flex flex-row py-4'>
						Отчет по медицинским показателем обучающихся отделения:
						<b className='ml-2'>{departmentName}</b>
					</div>
					<table className={styles.table}>
						<thead className={'border-b-2 border-t-2'}>
							<tr>
								<th>Cтудент</th>
								<th>Группа</th>
								<th>Отделение</th>
								<th>Группа по физкультуре</th>
								<th>Группа здоровья</th>
								<th>Дата начала действия</th>
								<th>Дата окончания действия</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{data?.map(({ id, courses }) =>
								courses?.flatMap(({ groups }) =>
									groups.flatMap(({ students, name: groupName }) =>
										students.flatMap(
											({ name, surname, secondName, medicalCertificates }) =>
												medicalCertificates?.map(
													(
														{
															startDate,
															finishDate,
															healthGroup,
															physicalEducation
														},
														index
													) => (
														<tr
															className='border'
															key={`${id}-${name}-${surname}-${index}`}
														>
															<td className='p-2'>
																{formatFullName(surname, name, secondName)}
															</td>
															<td>{groupName}</td>
															<td>{departmentName}</td>
															<td>{physicalEducation.name}</td>
															<td>{healthGroup.name}</td>
															<td>
																{format(new Date(startDate), 'dd.MM.yyyy')}
															</td>
															<td>
																{format(new Date(finishDate), 'dd.MM.yyyy')}
															</td>
														</tr>
													)
												)
										)
									)
								)
							)}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	)
}

export default DepartmentReport
