import { InputHTMLAttributes, forwardRef } from 'react'

import styles from '@shared/styles/Fields.module.scss'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
	className?: string
	placeholder?: string
	type?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	({ id, label, className, placeholder, type, ...props }, ref) => {
		return (
			<div className={styles.container}>
				<label className={styles.label}>{label}</label>
				<input
					className={className ? className : styles.field}
					id={id}
					ref={ref}
					placeholder={placeholder}
					type={type}
					{...props}
				/>
			</div>
		)
	}
)

export default CustomInput
