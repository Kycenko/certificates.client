const Header = () => {
	return (
		<div className={'border-b-2 flex justify-start px-6 py-4'}>
			<div className={'justify-start text-blue-gray-900'}>
				<ul className={'my-2 ml-[320px] flex flex-row gap-2 cursor-pointer'}>
					<li className={'flex items-center  hover:text-blue-500'}>Отчёты</li>
					<li className={'flex items-center  hover:text-blue-500'}>Загрузить</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
