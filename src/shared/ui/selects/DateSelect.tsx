import { ru } from 'date-fns/locale/ru'
import { FC, LegacyRef, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from '@shared/styles/Fields.module.scss'

interface DateSelectProps {
	selected: Date | undefined
	id: string
	onChange: (value: Date | null) => void
	label: string
	className?: string
	maxDate: Date | null
	dateFormat: string
	showTimeSelect?: boolean
}

const DateSelect: FC<DateSelectProps> = forwardRef(
	(
		{
			id,
			label,
			selected,
			className,
			dateFormat,
			maxDate,
			onChange,
			showTimeSelect
		},
		ref
	) => {
		return (
			<div className={styles.container}>
				<label className={styles.label}>{label}</label>
				<DatePicker
					id={id}
					placeholderText='Выберите дату'
					dateFormat={dateFormat}
					selected={selected}
					onChange={date => onChange(date)}
					showTimeSelect={showTimeSelect}
					maxDate={maxDate}
					locale={ru}
					className={className ? className : styles.field}
					ref={ref as LegacyRef<DatePicker<undefined>>}
				/>
			</div>
		)
	}
)
export default DateSelect
