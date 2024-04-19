import clsx from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './CustomButton.module.scss'

type ButtonVariant = 'primary' | 'create'

// Расширяем интерфейс кнопки, добавляя свойство variant
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
}

const CustomButton = ({
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
				className={clsx(buttonStyles, className)}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default CustomButton
