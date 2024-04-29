const daysUntilTheEnd = (date: Date) => {
	const finishDate = new Date(date)
	const currentDate = new Date()

	return (
		<>
			{finishDate > currentDate ? (
				<div className='badge bg-green-300'>Да</div>
			) : (
				<div className='badge bg-red-300'>Нет</div>
			)}
		</>
	)
}

export default daysUntilTheEnd
