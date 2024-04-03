import { ChevronDown } from 'lucide-react'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const closeDropdown = () => setIsOpen(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				closeDropdown()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div
			ref={dropdownRef}
			className='relative inline-block z-50 text-left'
		>
			<button
				type='button'
				className='inline-flex justify-center items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
				onClick={toggleDropdown}
			>
				<span className='mr-2'>Отчеты</span>
				<ChevronDown />
			</button>

			{isOpen && (
				<div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black  ring-opacity-5'>
					<div
						className='py-1'
						onClick={closeDropdown}
					>
						{children}
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown
