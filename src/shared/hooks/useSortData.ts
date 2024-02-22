const useSortData = (data: any[], sortOrder: 'asc' | 'desc') => {
	const sortedData = data?.sort((a, b) => {
		return sortOrder === 'asc' ? a.number - b.number : b.number - a.number
	})

	return { sortedData, sortOrder }
}

export default useSortData
