import { InputHTMLAttributes, forwardRef } from 'react'

interface CustomCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id?: string
	className?: string
	type?: string
}

const CustomCheckBox = forwardRef<HTMLInputElement, CustomCheckBoxProps>(
	({ id, label, className, type, ...props }, ref) => {
		return (
			<div className={`form-control ${className}`}>
				<label className={'label cursor-pointer'}>
					<span className='label-text text-base'>{label}</span>
					<input
						className={type ? type : 'checkbox'}
						id={id}
						ref={ref}
						type={'checkbox'}
						{...props}
					/>
				</label>
			</div>
		)
	}
)

export default CustomCheckBox
