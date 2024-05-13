import { IStudent } from '../types'

const getFullName = (student: IStudent | undefined) => {
	const { surname = '', name = '', secondName = '' } = student || {}
	return `${surname} ${name} ${secondName}`.trim()
}

export default getFullName
