import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import {ICourse} from '@/modules/courses/types/course.types.ts'
import {PAGES_URL} from '@/shared/constants/enums.ts'

interface CourseDetailsDataProps {
	data: ICourse | undefined
}

const CourseDetailsData: FC<CourseDetailsDataProps> = ({ data }) => {
	const navigate = useNavigate()
	return (
		<>
			{data?.groups.length === 0 ? (
				<NoData />
			) : (
				data?.groups.map(({ id, name, students }) => (
					<tr
						onClick={() => navigate(`${PAGES_URL.GROUPS}/${id}`)}
						className={styles.cell}
						key={id}
					>
						<td className={styles.cellPadding}>{name}</td>
						<td className={styles.cellPadding}>
							{students ? students.length : 0}
						</td>
						<td>{data.number}</td>
					</tr>
				))
			)}
		</>
	)
}

export default CourseDetailsData
