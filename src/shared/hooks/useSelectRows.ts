import { useState } from 'react'

const useSelectRows = (data: any[]) => {
	const [selected, setSelected] = useState<{ [key: number | string]: boolean }>(
		{}
	)

	const toggleSelect = (id: number | string) => {
		setSelected(prev => ({ ...prev, [id]: !prev[id] }))
	}

	const toggleSelectAll = (checked: boolean) => {
		const newSelected = {} as { [key: number | string]: boolean }
		if (checked) {
			data.forEach(item => {
				newSelected[item.id] = true
			})
		}
		setSelected(newSelected)
	}

	return {
		selected,
		toggleSelect,
		toggleSelectAll
	}
}

export default useSelectRows
