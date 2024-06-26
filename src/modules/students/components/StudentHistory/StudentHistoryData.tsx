import { format } from 'date-fns'
import { FC } from 'react'

import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { IStudentHistory } from '@/modules/students/types/student-history.types.ts'

interface StudentHistoryDataProps {
	data: IStudentHistory[] | undefined
}

const StudentHistoryData: FC<StudentHistoryDataProps> = ({ data }) => {
	return (
		<>
			{!data || data.length === 0 ? (
				<NoData />
			) : (
				data?.map(({ id, group, createdAt }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={'text-center p-2'}>{group?.name}</td>
						<td className={'text-center'}>
							{format(new Date(createdAt), 'dd.MM.yyyy HH:mm:ss')}
						</td>
					</tr>
				))
			)}
		</>
	)
}

export default StudentHistoryData
