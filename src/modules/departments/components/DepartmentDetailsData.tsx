import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IDepartment } from '@/modules/departments/types/department.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import styles from '@/shared/styles/DetailsTables.module.scss'

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
