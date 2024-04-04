import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

import Heading from '@/components/ui/fields/Heading.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { getStudentHistory } from '@/lib/utils/saveStudentHistory.ts'
import { useGetStudent } from '@/queries/student.queries.ts'

const StudentHistory = () => {
	const { id } = useParams()
	const { student } = useGetStudent(id)
	const studentHistory = getStudentHistory(id)

	return (
		<div>
			<Heading title={'История изменений'}>
				<p>
					{student?.surname} {student?.name} {student?.secondName}
				</p>
			</Heading>

			<table className={styles.table}>
				<thead className={styles.tHeads}>
					<tr>
						<th>ФИО</th>
						<th>Дата рождения</th>
						<th>Дата изменения</th>
					</tr>
				</thead>
				<tbody>
					{studentHistory.map(item => (
						<tr
							className={styles.contentCell}
							key={item.id}
						>
							<td>
								{item.surname} {item.name} {item.secondName}
							</td>
							<td>{format(new Date(item.birthDate), 'dd.MM.yyyy')}</td>
							<td>{format(new Date(item.updatedAt), 'dd.MM.yyyy HH:mm:ss')}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default StudentHistory
