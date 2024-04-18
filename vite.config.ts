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
			'@/api': path.resolve(__dirname, './src/api'),
			'@/app': path.resolve(__dirname, './src/app'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/queries': path.resolve(__dirname, './src/queries'),
			'@/services': path.resolve(__dirname, './src/services'),
			'@/types': path.resolve(__dirname, './src/types'),
			'@/lib': path.resolve(__dirname, './src/lib')
		}
	}
})
