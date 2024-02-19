export const updateHistory = (
	searchTerm: string,
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
