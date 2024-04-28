import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'
import AuthProvider from './app/providers/AuthProvider'
import FiltersProvider from './app/providers/FiltersProvider'
import '@/app/index.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
			retryDelay: 500
		}
	}
})

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<AuthProvider>
				<FiltersProvider>
					<App />
				</FiltersProvider>

				<Toaster position='bottom-right' />
			</AuthProvider>
		</BrowserRouter>
	</QueryClientProvider>
)
