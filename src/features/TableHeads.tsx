import styles from '@shared/styles/Tables.module.scss'

export const CourseHeads = ['Номер курса']
export const DepartmentHeads = ['Название']
export const GroupHeads = ['Название']
export const StudentHeads = ['Фамилия', 'Имя', 'Отчество', 'Дата рождения']
export const CertificatesHeads = [
	'Дата начала',
	'Дата окончания',
	'Срок действия',
	'Дней до конца действия',
	'Действительна?'
]

const TableHeads = ({ data }: { data: string[] }) => {
	return (
		<tr className={styles.heads}>
			{data?.map(head => (
				<th
					key={head}
					className={styles.head}
				>
					{head}
				</th>
			))}
		</tr>
	)
}

export default TableHeads
