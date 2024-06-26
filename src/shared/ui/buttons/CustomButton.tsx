import cn from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './CustomButton.module.scss'

type ButtonVariant = 'primary' | 'create'

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
				className={cn(
					buttonStyles,
					className ? className : 'btn bg-primary text-white px-6'
				)}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default CustomButton
