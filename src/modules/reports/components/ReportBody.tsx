import { FC, ReactNode, RefObject } from 'react'

interface ReportBodyProps {
	printRef: RefObject<HTMLDivElement>
	header: string
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
			className='overflow-x-auto'
		>
			<div className='text-center'>
				Частное учреждение образования "Колледж бизнеса и права"
			</div>
			<div className='justify-center flex flex-row py-4'>
				{header}
				<b className='ml-2 font-bold'>{title}</b>
			</div>
			<div className='overflow-y-visible'>{children}</div>
		</div>
	)
}

export default ReportBody
