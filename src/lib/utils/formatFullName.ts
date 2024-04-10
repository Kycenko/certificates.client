const formatFullName = (surname: string, name: string, secondName: string) => {
	if (!secondName) return `${surname} ${name[0].toUpperCase()}.`
	return `${surname} ${name[0].toUpperCase()}.${secondName[0].toUpperCase()}.`
}

export default formatFullName
