import {useNavigate} from 'react-router-dom'

const NotFoundPage = () => {
	const navigate = useNavigate()
	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='text-center'>
				<h1 className='text-9xl font-bold text-gray-800'>404</h1>
				<p className='text-2xl font-light text-gray-600 mb-8'>
					Страница не найдена
				</p>
				<button
					className='px-6 py-3 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary'
					onClick={() => navigate('/', { replace: true })}
				>
					На главную
				</button>
			</div>
		</div>
	)
}

export default NotFoundPage
