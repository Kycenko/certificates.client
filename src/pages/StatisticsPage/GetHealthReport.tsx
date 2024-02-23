import { useGetStudentCertificates } from '@entities/Statistics/statistics.queries'
import { useParams } from 'react-router-dom'

const GetHealthReport = () => {
	const { id } = useParams()
	const { data } = useGetStudentCertificates(id)
	console.log(data)
	return (
		<div>
			{data?.map(item => (
				<div key={item.id}>
					{item.name} {item.surname} {item.secondName} {item.birthDate}
				</div>
			))}
		</div>
	)
}

export default GetHealthReport
