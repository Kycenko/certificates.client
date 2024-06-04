import { FC, ReactNode } from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	onChangePage: (page: number) => void
	totalPages: number
	totalElements?: number
	children?: ReactNode
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	onChangePage,
	totalPages,
	totalElements
}) => {
	return (
		<div className={styles.container}>
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
				disabledClassName={styles.disabledBtn}
			/>
			<span className='ml-2'>Всего записей: {totalElements}</span>
		</div>
	)
}

export default Pagination
