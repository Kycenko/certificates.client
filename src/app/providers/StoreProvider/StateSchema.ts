export interface SearchState {
	searchTerm: string
}

export interface SortState {
	sortOrder: 'asc' | 'desc'
}

export interface StateSchema {
	search: SearchState
	sort: SortState
}
