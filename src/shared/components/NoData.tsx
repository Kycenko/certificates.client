import { CircleSlash } from 'lucide-react'

const NoData = () => {
	return (
		<div className='absolute top-1/2 left-[55%]  transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-12'>
			<CircleSlash className='w-16 h-16 text-gray-400' />
			<h1 className='mt-2 text-xl '>Данные не найдены</h1>
		</div>
	)
}

export default NoData
