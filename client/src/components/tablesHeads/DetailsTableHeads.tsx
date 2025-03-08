import styles from '@/app/styles/DetailsTables.module.scss'

const DetailsTableHeads = ({ data }: { data: string[] }) => {
	return (
		<tr className={styles.tHeads}>
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

export default DetailsTableHeads
