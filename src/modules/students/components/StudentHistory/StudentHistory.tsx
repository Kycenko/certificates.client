import { useParams } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import getFullName from '../../helpers/getFullName.ts'

import StudentHistoryData from './StudentHistoryData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetStudentHistories } from '@/modules/students/api/student-history.queries.ts'
import { StudentHistoryHeads } from '@/modules/students/components/student-heads.ts'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const StudentHistory = () => {
	const { id } = useParams()
	const { students, isLoading } = useGetStudentHistories(id)
	const studentName = getFullName(students?.[0]?.student)

	return (
		<div>
			<Heading title={'История изменений обучающегося'}>
				<p>{studentName}</p>
			</Heading>
			<table className={styles.table}>
				<thead className={styles.tHeads}>
					<TableHeads
						className={styles.dHead}
						data={StudentHistoryHeads}
					/>
				</thead>
				<tbody>
					{isLoading ? (
						<CustomLoader />
					) : (
						<StudentHistoryData data={students} />
					)}
				</tbody>
			</table>
		</div>
	)
}

export default StudentHistory
