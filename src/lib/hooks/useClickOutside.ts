import { RefObject, useEffect } from 'react'

const useClickOutside = (ref: RefObject<HTMLElement>, onClose: () => void) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside, true)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true)
		}
	}, [ref, onClose])
}

export default useClickOutside
