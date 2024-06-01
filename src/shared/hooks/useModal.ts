import { useState } from 'react'

const useModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [editId, setEditId] = useState<number | string | null>(null)
	const [deleteId, setDeleteId] = useState<number | string | null>(null)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return {
		isOpen,
		editId,
		openModal,
		closeModal,
		setEditId,
		deleteId,
		setDeleteId
	}
}

export default useModal
