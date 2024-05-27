import {useState} from 'react'

const useFilterStates = (
	initialSortOrder = 'asc' as 'asc' | 'desc',
	initialDepartmentValue = '',
	initialCourseValue = '',
	initialGroupValue = '',
	initialHealthValue = '',
	initialPhysicalValue = '',
	initialIsExpelledValue = ''
) => {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder)
	const [courseValue, setCourseValue] = useState(initialCourseValue)
	const [groupValue, setGroupValue] = useState(initialGroupValue)
	const [departmentValue, setDepartmentValue] = useState(initialDepartmentValue)
	const [healthValue, setHealthValue] = useState(initialHealthValue)
	const [physicalValue, setPhysicalValue] = useState(initialPhysicalValue)
	const [isExpelledValue, setIsExpelledValue] = useState(initialIsExpelledValue)

	return {
		sortOrder,
		setSortOrder,
		departmentValue,
		setDepartmentValue,
		courseValue,
		setCourseValue,
		groupValue,
		setGroupValue,
		healthValue,
		setHealthValue,
		physicalValue,
		setPhysicalValue,
		isExpelledValue,
		setIsExpelledValue
	}
}
export default useFilterStates
