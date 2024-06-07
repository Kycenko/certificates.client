/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5bc0de',
				secondary: '#5c5c5c'
			}
		}
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: 'light',
		base: true,
		styled: true,
		utils: true
	}
}
