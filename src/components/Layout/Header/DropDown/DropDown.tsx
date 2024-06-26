import { ChevronDown } from 'lucide-react'
import { FC, PropsWithChildren, useRef, useState } from 'react'

import styles from '@/components/Layout/Header/DropDown/DropDown.module.scss'

import useClickOutside from '@/shared/hooks/useClickOutside.ts'

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const closeDropdown = () => setIsOpen(false)
	useClickOutside(dropdownRef, closeDropdown)

	return (
		<div
			ref={dropdownRef}
			className={styles.drop}
		>
			<button
				type='button'
				className={styles.button}
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
						className={styles.list}
					>
						{children}
					</ul>
				</div>
			)}
		</div>
	)
}
export default Dropdown
