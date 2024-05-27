import {FC, ReactNode} from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	onChangePage: (page: number) => void
	totalPages: number
	children?: ReactNode
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	onChangePage,
	totalPages,
	children
}) => {
	return (
		<div className='flex p-2 justify-between items-center'>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='Далее'
				previousLabel='Назад'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				pageCount={totalPages}
				forcePage={Math.min(Math.max(currentPage - 1, 0), totalPages - 1)}
				renderOnZeroPageCount={null}
				disabledClassName='btn-disabled'
			/>
			<span className='ml-2'>{children}</span>
		</div>
	)
}

export default Pagination
