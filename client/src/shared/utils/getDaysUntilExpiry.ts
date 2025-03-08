const getDaysUntilExpiry = (finishDate: Date, startDay: Date) => {
	const start: Date = new Date(startDay)
	const end: Date = new Date(finishDate)
	const diffTime = Math.abs(end.getTime() - start.getTime())
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
	if (startDay > finishDate) return 0

	return diffDays
}

export default getDaysUntilExpiry
