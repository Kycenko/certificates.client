import useAuth from '@/hooks/useAuth'

const Header = () => {
	const { user } = useAuth()

	return user?.isAdmin ? (
		<div className={'border-b-2 flex justify-start py-4'}>
			<div className={'justify-start text-blue-gray-900'}>
				<ul className={'flex flex-row gap-2 cursor-pointer'}>
					<li className={'flex items-center  hover:text-blue-500'}>Отчёт</li>
					<li className={'flex items-center  hover:text-blue-500'}>
						Загрузить
					</li>
				</ul>
			</div>
		</div>
	) : (
		<div className={'border-b-2 flex justify-end py-4'}>
			<div className={'justify-start mr-5 text-blue-gray-900'}>
				<ul>
					<li>{user?.login}</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
