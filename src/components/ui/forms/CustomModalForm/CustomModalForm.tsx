import { X } from 'lucide-react'
import { FC, ReactNode, memo, useRef } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import styles from './CustomModalForm.module.scss'
import useClickOutside from '@/lib/hooks/useClickOutside.ts'

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

const CustomModalForm: FC<CreateModalProps | DeleteConfirmModalProps> = memo(
	({ isOpen, formTitle, buttonTitle, onClose, onSubmit, children }) => {
		const methods = useForm()

		const { handleSubmit } = methods

		const modalRef = useRef<HTMLDivElement>(null)
		useClickOutside(modalRef, onClose)
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
										//FIXME: deprecated className
										className={
											'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded'
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
)

export default CustomModalForm
