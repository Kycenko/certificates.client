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
	sortOrder: 'asc' | 'desc'
	setSearchTerm: Dispatch<SetStateAction<string>>
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
}

export const FiltersContext = createContext<IFiltersContext | null>(null)

const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	return (
		<FiltersContext.Provider
			value={{ searchTerm, sortOrder, setSearchTerm, setSortOrder }}
		>
			{children}
		</FiltersContext.Provider>
	)
}

export default FiltersProvider
