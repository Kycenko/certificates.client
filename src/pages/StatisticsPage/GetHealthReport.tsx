import { useGetStudentCertificates } from '@entities/Statistics/statistics.queries'
import { useParams } from 'react-router-dom'

const GetHealthReport = () => {
	const { id } = useParams()
	const { data } = useGetStudentCertificates(id)
	console.log(data)
	return (
		<div>
		
		</div>
	)
}

export default GetHealthReport
