import { ReactNode, SelectHTMLAttributes, forwardRef } from 'react'

import styles from './CustomSelect.module.scss'

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode
	id: string
	label: string
	className?: string
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
	({ id, label, children, className, ...props }, ref) => {
		return (
			<div className={styles.container}>
				<label className={styles.label}>{label}</label>
				<select
					id={id}
					ref={ref}
					className={className ? className : styles.select}
					{...props}
				>
					{children}
				</select>
			</div>
		)
	}
)
export default CustomSelect
