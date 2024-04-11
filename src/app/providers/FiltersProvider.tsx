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
	courseNumber: string
	setCourseNumber: Dispatch<SetStateAction<string>>
	departmentName: string
	setDepartmentName: Dispatch<SetStateAction<string>>
}

export const FiltersContext = createContext<IFiltersContext | null>(null)

const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [groupName, setGroupName] = useState<string>('')
	const [courseNumber, setCourseNumber] = useState<string>('')
	const [departmentName, setDepartmentName] = useState<string>('')

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
				setCourseNumber,
				departmentName,
				setDepartmentName
			}}
		>
			{children}
		</FiltersContext.Provider>
	)
}

export default FiltersProvider
