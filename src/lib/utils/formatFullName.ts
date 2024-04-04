const formatFullName = (surname: string, name: string, secondName: string) => {
	return `${surname} ${name[0].toUpperCase()}.${secondName[0].toUpperCase()}.`
}

export default formatFullName
