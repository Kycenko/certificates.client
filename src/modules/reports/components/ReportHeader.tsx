import { memo } from 'react'

const ReportHeader = memo(({ onPrint }: { onPrint: () => void }) => {
	return (
		<div>
			<div className={'justify-center mt-4'}>
				{/* <div className={'mb-2 flex justify-center'}>
					<img
						src='/logo.webp'
						alt='Logo'
					/>
				</div> */}
				<div className='justify-center flex'>
					<button
						className='p-2 bg-red-500 text-white rounded-md mb-4'
						onClick={onPrint}
					>
						Экспорт в PDF
					</button>
				</div>
			</div>
		</div>
	)
})

export default ReportHeader
