import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	server: {
		open: true
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@app': path.resolve(__dirname, './src/app'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@features': path.resolve(__dirname, './src/features'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages')
		}
	}
})
