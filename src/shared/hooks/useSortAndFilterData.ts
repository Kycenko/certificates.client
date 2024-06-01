import { useState } from 'react'

const useSortAndFilterData = (data: any[], sortField: string) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	const filteredData = data?.filter(item =>
		item[sortField].toLowerCase().includes(searchTerm.toLowerCase())
	)
	const sortedData = filteredData?.sort((a, b) => {
		return sortOrder === 'asc'
			? a.name.localeCompare(b.name)
			: b.name.localeCompare(a.name)
	})

	return {
		sortedData,
		searchTerm,
		setSearchTerm,
		sortOrder,
		setSortOrder
	}
}

export default useSortAndFilterData
