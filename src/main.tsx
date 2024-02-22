import { AuthProvider } from '@app/providers/AuthProvider/AuthProvider.tsx'
import { StoreProvider } from '@app/providers/StoreProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'

import '@app/styles/index.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StoreProvider>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthProvider>
					<App />
					<Toaster position='bottom-right' />
				</AuthProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StoreProvider>
)
