import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IDepartment } from '@/types/department.types'

import styles from '@/app/styles/DetailsTables.module.scss'
import { PAGES_URL } from '@/lib/constants/enums'

interface DepartmentDetailsDataProps {
	data: IDepartment | undefined
}

const DepartmentDetailsData: FC<DepartmentDetailsDataProps> = ({ data }) => {
	const navigate = useNavigate()
	return (
		<>
			{data?.courses?.map(({ id, number, groups }) => (
				<tr
					onClick={() => navigate(`${PAGES_URL.COURSES}/${id}`)}
					className={styles.cell}
					key={id}
				>
					<td className={styles.cellPadding}>{`${number} Курс`}</td>
					<td className={styles.cellPadding}>
						{groups ? groups.length : 'Группы не найдены'}
					</td>
					<td className={styles.cellPadding}>{data.name}</td>
				</tr>
			))}
		</>
	)
}

export default DepartmentDetailsData
