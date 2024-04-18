import { useContext } from 'react'

import { FiltersContext } from '@/app/providers/FiltersProvider'

const useFilters = () => {
	const filtersContext = useContext(FiltersContext)

	if (!filtersContext) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return filtersContext
}

export default useFilters
