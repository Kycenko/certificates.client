import styles from '@shared/styles/Fields.module.scss'
import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react'
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
					className={className ? className : styles.field}
					{...props}
				>
					{children}
				</select>
			</div>
		)
	}
)
export default CustomSelect
