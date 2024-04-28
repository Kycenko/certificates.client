import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '@/shared/styles/DetailsTables.module.scss'
import { ICourse } from '@/modules/courses/types/course.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'

interface CourseDetailsDataProps {
	data: ICourse | undefined
}

const CourseDetailsData: FC<CourseDetailsDataProps> = memo(({ data }) => {
	const navigate = useNavigate()
	return (
		<>
			{data?.groups?.map(({ id, name, students }) => (
				<tr
					onClick={() => navigate(`${PAGES_URL.GROUPS}/${id}`)}
					className={styles.cell}
					key={id}
				>
					<td className={styles.cellPadding}>{name}</td>
					<td className={styles.cellPadding}>
						{students ? students.length : 0}
					</td>
					<td>{data.number}-й Курс</td>
				</tr>
			))}
		</>
	)
})

export default CourseDetailsData
