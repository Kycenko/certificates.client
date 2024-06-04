import { format } from 'date-fns'
import { FC, ReactNode, RefObject } from 'react'

interface ReportBodyProps {
	printRef: RefObject<HTMLDivElement>
	header: any
	title?: JSX.Element[] | undefined
	children: ReactNode
}

const ReportBody: FC<ReportBodyProps> = ({
	printRef,
	header,
	title,
	children
}) => {
	return (
		<div
			ref={printRef}
			className='overflow-x-auto text-center'
		>
			<div>
				<b>{format(new Date(), 'dd.MM.yyyy')}</b>
			</div>
			<div className='text-center flex flex-col'>
				Частное учреждение образования <b>"Колледж бизнеса и права"</b>
			</div>
			<div className='justify-center flex flex-row py-4'>
				{header}
				<b className='ml-1 font-bold'>{title}</b>
			</div>

			<div className='overflow-y-visible'>{children}</div>
		</div>
	)
}

export default ReportBody
