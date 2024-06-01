import { InputHTMLAttributes, forwardRef } from 'react'

import styles from './CustomInput.module.scss'

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
			<div className={className ? className : styles.container}>
				<label className={styles.label}>{label}</label>
				<input
					className={
						type === 'checkbox'
							? styles.checkbox
							: className
								? className
								: styles.input
					}
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
