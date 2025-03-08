const getValidityPeriod = (finishDate: Date, startDate: Date) => {
	const start = new Date(startDate)
	const finish = new Date(finishDate)

	let months = (finish.getFullYear() - start.getFullYear()) * 12
	months -= start.getMonth()
	months += finish.getMonth()

	if (start.getTime() > finish.getTime()) return 'Срок истёк'
	if (months < 0 || start.getTime() === finish.getTime()) return 'Срок истёк'

	const getMonthWordEnding = (months: number) => {
		if (months === 1 || months === 21) {
			return 'месяц'
		} else if ((months > 1 && months < 5) || (months > 21 && months < 25)) {
			return 'месяца'
		} else {
			return 'месяцев'
		}
	}

	return `${months === 0 ? 'Текущий месяц' : `${months} ${getMonthWordEnding(months)}`}`
}

export default getValidityPeriod
