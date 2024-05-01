const getDaysUntilExpiry = (finishDate: Date, startDay: Date) => {
	const start = new Date(startDay) as any
	const end = new Date(finishDate) as any
	const diffTime = Math.abs(end - start)
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

	return diffDays
}

export default getDaysUntilExpiry
