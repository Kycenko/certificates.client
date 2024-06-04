import { X } from 'lucide-react'
import { FC, ReactNode, useRef } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import styles from './CustomModalForm.module.scss'
import useClickOutside from '@/shared/hooks/useClickOutside.ts'

interface CustomModalFormProps {
	isOpen: boolean
	formTitle: string
	buttonTitle: string
	disabled?: boolean
	children?: ReactNode
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
	disabled,
	onClose,
	onSubmit,
	children
}) => {
	const methods = useForm()

	const { handleSubmit } = methods

	const modalRef = useRef<HTMLDivElement>(null)
	useClickOutside(modalRef, onClose)

	const submitBtn = async (data: any) => {
		onSubmit(data)
		onClose()
	}

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
									<div className={styles.footer}>
										<button
											className={styles.closeBtn}
											onClick={onClose}
											type={'button'}
										>
											Закрыть
										</button>
										<button
											disabled={disabled}
											className={styles.submitBtn}
											type='submit'
											onClick={submitBtn}
										>
											{buttonTitle}
										</button>
									</div>
								</form>
							</FormProvider>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default CustomModalForm
