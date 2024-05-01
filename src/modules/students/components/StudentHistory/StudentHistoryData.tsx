import { format } from 'date-fns'
import { FC } from 'react'

import { IStudentHistory } from '@/modules/students/types/student-history.types.ts'
import NoData from '@/shared/components/NoData'
import styles from '@/shared/styles/Tables.module.scss'

interface StudentHistoryDataProps {
	data: IStudentHistory[] | undefined
}

const StudentHistoryData: FC<StudentHistoryDataProps> = ({ data }) => {
	if (!data || data.length === 0) return <NoData />
	return (
		<>
			{data?.map(({ id, group, createdAt }) => (
				<tr
					className={styles.contentCell}
					key={id}
				>
					<td className={'text-center'}>{group?.name}</td>
					<td className={'text-center'}>
						{format(new Date(createdAt), 'dd.MM.yyyy HH:mm:ss')}
					</td>
				</tr>
			))}
		</>
	)
}

export default StudentHistoryData
