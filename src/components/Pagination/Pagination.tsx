import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	onChangePage: (page: number) => void
	totalPages: number
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	onChangePage,
	totalPages
}) => {
	return (
		<div className='flex p-4'>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='Далее'
				previousLabel='Назад'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={totalPages}
				forcePage={Math.min(Math.max(currentPage - 1, 0), totalPages - 1)}
				renderOnZeroPageCount={null}
				disabledClassName='btn-disabled'
			/>
		</div>
	)
}

export default Pagination
