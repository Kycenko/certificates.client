import styles from '@shared/styles/Tables.module.scss'

export const CourseHeads = ['Номер курса']
export const DepartmentHeads = ['Название']
export const GroupHeads = ['Название']
export const StudentHeads = ['Фамилия', 'Имя', 'Отчество', 'Дата рождения']

const TableHeads = ({ data }: { data: string[] }) => {
	return (
		<tr className={styles.heads}>
			{data?.map(head => (
				<th key={head} className={styles.head}>
					{head}
				</th>
			))}
		</tr>
	)
}

export default TableHeads
