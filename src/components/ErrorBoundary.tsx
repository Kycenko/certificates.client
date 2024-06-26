import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	}

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className='w-full h-screen flex justify-center items-center flex-col bg-gray-100 text-gray-800'>
					<h1 className='text-3xl font-semibold mb-4'>
						Упс! Что-то пошло не так.
					</h1>

					<button
						onClick={() => window.location.reload()}
						className='px-6 py-3 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary'
					>
						На главную
					</button>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
