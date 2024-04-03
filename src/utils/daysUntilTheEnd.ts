const daysUntilTheEnd = (date: Date) => {
	const finishDate = new Date(date)
	const currentDate = new Date()

	return finishDate > currentDate ? 'Да' : 'Нет'
}

export default daysUntilTheEnd
