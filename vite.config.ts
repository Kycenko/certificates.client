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
			'@/': path.resolve(__dirname, './src'),
			'@/app': path.resolve(__dirname, './src/app'),
			'@/modules': path.resolve(__dirname, './src/modules'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/shared': path.resolve(__dirname, './src/shared')
		}
	}
})
