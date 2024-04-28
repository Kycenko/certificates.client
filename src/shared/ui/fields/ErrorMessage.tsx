import { memo } from 'react'
import { FieldError } from 'react-hook-form'

const ErrorMessage = memo(({ error }: { error: FieldError | undefined }) => {
	return error && <p className='text-red-500'>{error.message}</p>
})

export default ErrorMessage
