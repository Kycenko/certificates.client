import { memo } from 'react'
import { useParams } from 'react-router-dom'

import Heading from '@/shared/ui/fields/Heading/Heading.tsx'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'
import { StudentHistoryHeads } from '@/modules/students/components/student-heads.ts'

import StudentHistoryData from './StudentHistoryData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useGetStudentHistories } from '@/modules/students/queries/student-history.queries.ts'

const StudentHistory = () => {
	const { id } = useParams()
	const { students } = useGetStudentHistories(id)
	const studentName = `${students?.[0]?.student?.surname} ${students?.[0]?.student?.name} ${students?.[0]?.student?.secondName || ''}`

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
					<StudentHistoryData data={students} />
				</tbody>
			</table>
		</div>
	)
}

export default memo(StudentHistory)
