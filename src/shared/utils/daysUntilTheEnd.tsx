import getDaysUntilExpiry from './getDaysUntilExpiry'

const daysUntilTheEnd = (date: Date) => {
	const currentDate = new Date()
	const finishDate = new Date(date)
	const diffDays = getDaysUntilExpiry(finishDate, currentDate)

	return (
		<>
			{currentDate.toDateString() === finishDate.toDateString() ? (
				<div className='badge bg-red-300'>Нет</div>
			) : diffDays > 0 ? (
				diffDays < 30 ? (
					<div className='badge bg-yellow-300'>Да</div>
				) : (
					<div className='badge bg-green-300'>Да</div>
				)
			) : (
				<div className='badge bg-red-300'>Нет</div>
			)}
		</>
	)
}

export default daysUntilTheEnd
