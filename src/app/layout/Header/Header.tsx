import { useAuth } from '@shared/hooks'

const Header = () => {
	const { user } = useAuth()
	return (
		<div className={'border-b flex px-6 py-4'}>
			<ul className='flex flex-row gap-6 cursor-pointer'>
				<li>Отчет</li>
				<li>Загрузить</li>
				<li>{user?.login}</li>
			</ul>
		</div>
	)
}

export default Header
