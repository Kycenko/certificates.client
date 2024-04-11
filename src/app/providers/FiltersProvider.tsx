import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

interface IFiltersContext {
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}

export const FiltersContext = createContext<IFiltersContext | null>(null)

const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [filterValue, setFilterValue] = useState<string>('')

	return (
		<FiltersContext.Provider
			value={{
				searchTerm,
				sortOrder,
				setSearchTerm,
				setSortOrder,
				filterValue,
				setFilterValue
			}}
		>
			{children}
		</FiltersContext.Provider>
	)
}

export default FiltersProvider
