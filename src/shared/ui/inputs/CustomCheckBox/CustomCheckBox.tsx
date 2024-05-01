import { InputHTMLAttributes, forwardRef, memo } from 'react'

interface CustomCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id?: string
	className?: string
	type?: string
}

const CustomCheckBox = memo(
	forwardRef<HTMLInputElement, CustomCheckBoxProps>(
		({ id, label, className, placeholder, type, ...props }, ref) => {
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
)

export default CustomCheckBox
