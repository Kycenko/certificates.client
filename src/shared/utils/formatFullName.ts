const formatFullName = (
	surname: string,
	name: string,
	secondName: string | undefined
) => {
	if (!secondName) return `${surname} ${name[0].toUpperCase()}.`
	return `${surname} ${name[0].toUpperCase()}.${secondName[0].toUpperCase()}.`
}

export default formatFullName
