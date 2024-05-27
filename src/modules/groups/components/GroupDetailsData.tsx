import {format} from 'date-fns'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import {IGroup} from '@/modules/groups/types/group.types.ts'
import {PAGES_URL} from '@/shared/constants/enums.ts'

interface GroupDetailsDataProps {
	data: IGroup | undefined
}

const GroupDetailsData: FC<GroupDetailsDataProps> = ({ data }) => {
	const navigate = useNavigate()
	if (data?.students.length === 0) return <NoData />
	return (
		<>
			{data?.students?.map(
				({ id, surname, name, secondName, birthDate, medicalCertificates }) => (
					<tr
						onClick={() => navigate(`${PAGES_URL.STUDENTS}/${id}`)}
						className={styles.cell}
						key={id}
					>
						<td className={styles.cellPadding}>{surname}</td>
						<td className={styles.cellPadding}>{name}</td>
						<td className={styles.cellPadding}>
							{secondName ? secondName : 'Не указано'}
						</td>
						<td className={styles.cellPadding}>
							{format(new Date(birthDate), 'dd.MM.yyyy')}
						</td>
						<td className={styles.cellPadding}>{data.name}</td>
						<td>{medicalCertificates?.length}</td>
					</tr>
				)
			)}
		</>
	)
}

export default GroupDetailsData
