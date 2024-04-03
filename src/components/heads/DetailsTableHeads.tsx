const DetailsTableHeads = ({ data }: { data: string[] }) => {
	return (
		<tr className={'border'}>
			{data?.map(head => (
				<th
					key={head}
					className={'p-2'}
				>
					{head}
				</th>
			))}
		</tr>
	)
}

export default DetailsTableHeads
