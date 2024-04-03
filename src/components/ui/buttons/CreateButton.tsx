import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from '@/app/styles/Fields.module.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

const CreateButton = ({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) => {
	return (
		<div className={styles.btnContainer}>
			<button
				className={className ? className : styles.createBtn}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default CreateButton
