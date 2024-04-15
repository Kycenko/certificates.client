import { FC } from 'react'

interface ReportHeaderProps {
	onPrint: () => void
}

const ReportHeader: FC<ReportHeaderProps> = ({ onPrint }) => {
	return (
		<div>
			<div className={'justify-center'}>
				<div className={'mb-2 flex justify-center'}>
					<img
						src='/logo.webp'
						alt='Logo'
					/>
				</div>
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
}

export default ReportHeader
