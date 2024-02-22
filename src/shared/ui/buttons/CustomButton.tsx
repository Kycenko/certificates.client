import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from '@shared/styles/Fields.module.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

const CustomButton = ({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) => {
	return (
		<button
			className={className ? className : styles.customBtn}
			{...rest}
		>
			{children}
		</button>
	)
}

export default CustomButton
