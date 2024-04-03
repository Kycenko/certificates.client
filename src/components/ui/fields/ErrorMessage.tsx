import { FieldError } from 'react-hook-form'

const ErrorMessage = ({ error }: { error: FieldError | undefined }) => {
	return error && <p>{error.message}</p>
}

export default ErrorMessage
