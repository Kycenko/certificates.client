import { useParams } from 'react-router-dom'

import Heading from '@/components/ui/fields/Heading/Heading'

import TableHeads from '../../tablesHeads/TableHeads'
import { StudentHistoryHeads } from '../student-heads'

import StudentHistoryData from './StudentHistoryData'
import styles from '@/app/styles/Tables.module.scss'
import { useGetStudentHistories } from '@/queries/student-history.queries'

const StudentHistory = () => {
	const { id } = useParams()
	const { students } = useGetStudentHistories(id)
	const studentName = students?.map(({ student }) => <p>{student?.name}</p>)
	return (
		<div>
			<Heading title={'История изменений обучающегося'}>{studentName}</Heading>
			<table className={styles.table}>
				<thead className={styles.tHeads}>
					<TableHeads data={StudentHistoryHeads} />
				</thead>
				<tbody>
					<StudentHistoryData data={students} />
				</tbody>
			</table>
		</div>
	)
}

export default StudentHistory
