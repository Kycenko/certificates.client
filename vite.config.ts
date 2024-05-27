import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
	plugins: [
		// react({
		// 	babel: {
		// 		plugins: [['babel-plugin-react-compiler']]
		// 	}
		// })
	],
	// server: {
	// 	open: true
	// },
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/app': path.resolve(__dirname, './src/app'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/modules': path.resolve(__dirname, './src/modules'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/shared': path.resolve(__dirname, './src/shared')
		}
	}
})
