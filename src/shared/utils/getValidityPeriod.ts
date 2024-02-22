const getValidityPeriod = (finishDate: Date, startDate: Date) => {
	const start = new Date(startDate)
	const finish = new Date(finishDate)

	let months = (finish.getFullYear() - start.getFullYear()) * 12
	months -= start.getMonth()
	months += finish.getMonth()

	if (months < 0 || start.getTime() === finish.getTime()) return 'Срок истёк'

	return `${months === 0 ? 'Текущий месяц' : `${months} месяц(а/ев)`}`
}

export default getValidityPeriod
