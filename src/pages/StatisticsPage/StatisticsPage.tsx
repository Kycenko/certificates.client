import { useGetGroupStatistics } from '@entities/Statistics/statistics.queries'
import { useParams } from 'react-router-dom'

const StatisticsPage = () => {
	const { id } = useParams()
	const { groupStatistics } = useGetGroupStatistics(id)
	console.log(groupStatistics)
	return (
		<div>
			{groupStatistics?.students?.map(item => (
				<div>
					{item.name} {item.secondName} {item.surname}
				</div>
			))}
		</div>
	)
}

export default StatisticsPage
