const useSortAndFilterData = (
	data: any[],
	searchTerm: string,
	sortOrder: 'asc' | 'desc'
) => {
	const filteredData = data?.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	)
	const sortedData = filteredData?.sort((a, b) => {
		return sortOrder === 'asc'
			? a.name.localeCompare(b.name)
			: b.name.localeCompare(a.name)
	})

	return { sortedData, searchTerm, sortOrder }
}

export default useSortAndFilterData
