import { StudentHistoryItem } from '@features/ChangeHistory'

export interface SearchState {
	searchTerm: string
}

export interface SortState {
	sortOrder: 'asc' | 'desc'
}

export interface StudentHistoryState {
	history: StudentHistoryItem[]
}

export interface StateSchema {
	search: SearchState
	sort: SortState
	studentHistory: StudentHistoryState
}
