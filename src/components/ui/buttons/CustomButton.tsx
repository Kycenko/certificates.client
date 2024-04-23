import cn from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react'

import styles from './CustomButton.module.scss'

type ButtonVariant = 'primary' | 'create'

// Расширяем интерфейс кнопки, добавляя свойство variant
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
}

const CustomButton = memo(
	({
		children,
		className,
		variant,
		...rest
	}: PropsWithChildren<CustomButtonProps>) => {
		const variantStyles = {
			primary: styles.primaryBtn,
			create: styles.createBtn
		}

		const buttonStyles = variant
			? variantStyles[variant]
			: variantStyles['primary']

		return (
			<div className={styles.container}>
				<button
					className={cn(
						buttonStyles,
						className ? className : 'btn bg-primary text-white'
					)}
					{...rest}
				>
					{children}
				</button>
			</div>
		)
	}
)

export default CustomButton
