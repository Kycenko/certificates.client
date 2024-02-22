export const updateHistory = (
	searchTerm: string | null,
	sortDirection: 'asc' | 'desc'
) => {
	{
		window.history.pushState(
			null,
			'',
			`?&search=${searchTerm}&order=${sortDirection}`
		)
	}
}
