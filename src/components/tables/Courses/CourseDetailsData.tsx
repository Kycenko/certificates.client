import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ICourse } from '@/types/course.types'

import styles from '@/app/styles/DetailsTables.module.scss'
import { PAGES_URL } from '@/lib/constants/enums'

interface CourseDetailsDataProps {
	data: ICourse | undefined
}

const CourseDetailsData: FC<CourseDetailsDataProps> = ({ data }) => {
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
}

export default CourseDetailsData
