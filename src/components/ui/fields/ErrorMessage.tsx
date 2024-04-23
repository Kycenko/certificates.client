import { memo } from 'react'
import { FieldError } from 'react-hook-form'

const ErrorMessage = memo(({ error }: { error: FieldError | undefined }) => {
	return error && <p>{error.message}</p>
})

export default ErrorMessage
