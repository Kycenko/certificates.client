import { FC, ReactNode, RefObject } from 'react'

interface ReportBodyProps {
	printRef: RefObject<HTMLDivElement>
	header: string
	title: any
	children: ReactNode
}
const ReportBody: FC<ReportBodyProps> = ({
	printRef,
	header,
	title,
	children
}) => {
	return (
		<div ref={printRef}>
			<div className='text-center'>
				Частное учреждение образования "Колледж бизнеса и права"
			</div>
			<div className='justify-center flex flex-row py-4'>
				{header}
				<b className='ml-2'>{title}</b>
			</div>
			{children}
		</div>
	)
}

export default ReportBody
