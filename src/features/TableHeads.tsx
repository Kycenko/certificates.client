import styles from '@shared/styles/Tables.module.scss'

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
