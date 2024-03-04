import { Layout } from '@app/layout'
import { useGetStudentsCertificates } from '@entities/Statistics/statistics.queries'
import usePrint from '@shared/hooks/usePrint'
import { format } from 'date-fns'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const GetStudentsCertificates = () => {
	const { id } = useParams()

	const { data } = useGetStudentsCertificates(id)
	const departmentName = data?.map(({ name }) => <p>{name}</p>)

	const { printRef, handlePrint } = usePrint({
		documentTitle: `Department-${new Date().getFullYear()}`,
		onAfterPrint: () => console.log('success')
	})
	return (
		<Layout>
			<button onClick={handlePrint}>Экспорт</button>
			<div ref={printRef}>
				<div className={'justify-center'}>
					<div className={'mb-2 flex justify-center'}>
						<img
							src='/logo.webp'
							alt='Logo'
						/>
					</div>
					<p className='text-center '>
						Частное учреждение образования "Колледж бизнеса и права"
					</p>
					<p className='justify-center flex flex-row py-4'>
						Отчет по медицинским показателем обучающихся отделения:
						<b className='ml-2'>{departmentName}</b>
					</p>
				</div>
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2'}>
						<tr>
							<th>ФИО</th>
							<th>Дата начала действия</th>
							<th>Дата окончания действия</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						{data?.map(({ id, courses }) => (
							<Fragment key={id}>
								{courses?.map(({ groups }) =>
									groups?.map(({ students }) =>
										students?.map(
											({ name, surname, secondName, medicalCertificates }) => (
												<tr
													className='border'
													key={`${id}-${name}-${surname}`}
												>
													<td className='p-2'>
														{surname} {name} {secondName}
													</td>
													{medicalCertificates?.map(
														({ startDate, finishDate }) => (
															<Fragment key={`${startDate}-${finishDate}`}>
																<td>
																	{format(new Date(startDate), 'dd.MM.yyyy')}
																</td>
																<td>
																	{format(new Date(finishDate), 'dd.MM.yyyy')}
																</td>
															</Fragment>
														)
													)}
												</tr>
											)
										)
									)
								)}
							</Fragment>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	)
}
export default GetStudentsCertificates
