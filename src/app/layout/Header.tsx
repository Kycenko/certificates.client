import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	return (
		<div className={'border-b-2 flex justify-start py-4'}>
			<div className={'justify-start text-blue-gray-900'}>
				<ul className={'flex flex-row gap-2 cursor-pointer'}>
					<li
						onClick={() => navigate('/statistics/health-report')}
						className={'flex items-center  hover:text-blue-500'}
					>
						Отчёт
					</li>
					<li className={'flex items-center  hover:text-blue-500'}>
						Загрузить
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
