import { ChevronDown } from 'lucide-react'
import { FC, PropsWithChildren, memo, useRef, useState } from 'react'

import styles from './DropDown.module.scss'
import useClickOutside from '@/shared/hooks/useClickOutside.ts'

const Dropdown: FC<PropsWithChildren> = memo(({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const closeDropdown = () => setIsOpen(false)
	useClickOutside(dropdownRef, closeDropdown)

	return (
		<div
			ref={dropdownRef}
			// className={styles.container}
			className='dropdown '
		>
			<button
				type='button'
				// className={styles.button}
				className='btn m-1 bg-base-200'
				onClick={toggleDropdown}
			>
				<span>Отчеты</span>
				<ChevronDown />
			</button>

			{isOpen && (
				<div className={styles.open}>
					<ul
						tabIndex={0}
						onClick={closeDropdown}
						className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80'
					>
						{children}
					</ul>
				</div>
			)}
		</div>
	)
})
export default Dropdown
