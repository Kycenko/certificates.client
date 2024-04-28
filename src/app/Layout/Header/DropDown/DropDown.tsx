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
			className={styles.container}
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
					<ul onClick={closeDropdown}>{children}</ul>
				</div>
			)}
		</div>
	)
})
export default Dropdown
