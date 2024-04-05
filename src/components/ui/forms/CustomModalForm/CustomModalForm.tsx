import { X } from 'lucide-react'
import { FC, ReactNode, useEffect, useRef } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import styles from './CustomModalForm.module.scss'

interface CustomModalFormProps {
	isOpen: boolean
	formTitle: string
	buttonTitle: string
	children: ReactNode
	onClose: () => void
}

interface DeleteConfirmModalProps extends CustomModalFormProps {
	onSubmit: () => void
	buttonTitle: string
}

interface CreateModalProps extends CustomModalFormProps {
	onSubmit: SubmitHandler<any>
	buttonTitle: string
}

const CustomModalForm: FC<CreateModalProps | DeleteConfirmModalProps> = ({
	isOpen,
	formTitle,
	buttonTitle,
	onClose,
	onSubmit,
	children
}) => {
	const methods = useForm()

	const { handleSubmit } = methods

	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node))
				onClose()
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside, true)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true)
		}
	}, [isOpen, onClose])

	return (
		isOpen && (
			<div className={isOpen ? styles.modalOpen : styles.modalClose}>
				<div className={styles.container}>
					<div
						className={styles.main}
						ref={modalRef}
					>
						<div className={styles.form}>
							<div className={styles.header}>
								<h3 className={styles.title}>{formTitle}</h3>
								<X
									className={styles.cross}
									onClick={onClose}
								/>
							</div>
							<FormProvider {...methods}>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className={styles.content}>{children}</div>
								</form>
							</FormProvider>
							<div className={styles.footer}>
								<button
									className={styles.closeBtn}
									onClick={onClose}
									type={'button'}
								>
									Закрыть
								</button>
								<button
									className={
										'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
									}
									type='submit'
									onClick={onSubmit}
								>
									{buttonTitle}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default CustomModalForm
