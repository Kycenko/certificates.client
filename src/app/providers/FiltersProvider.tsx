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
	groupName: string
	setGroupName: Dispatch<SetStateAction<string>>
	courseNumber: string | undefined
	setCourseNumber: Dispatch<SetStateAction<string | undefined>>
}

export const FiltersContext = createContext<IFiltersContext | null>(null)

const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [groupName, setGroupName] = useState<string>('')
	const [courseNumber, setCourseNumber] = useState<string | undefined>(
		undefined
	)

	return (
		<FiltersContext.Provider
			value={{
				searchTerm,
				sortOrder,
				setSearchTerm,
				setSortOrder,
				groupName,
				setGroupName,
				courseNumber,
				setCourseNumber
			}}
		>
			{children}
		</FiltersContext.Provider>
	)
}

export default FiltersProvider
