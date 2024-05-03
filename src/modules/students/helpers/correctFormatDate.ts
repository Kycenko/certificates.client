import { format, parse } from 'date-fns'

const correctFormatDate = (dateStr: Date) => {
	return format(
		parse(dateStr.toString(), 'dd.MM.yyyy', new Date()),
		'dd.MM.yyyy'
	)
}
export default correctFormatDate
