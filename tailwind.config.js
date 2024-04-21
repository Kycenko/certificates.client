/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5bc0de'
			}
		}
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: 'light',
		base: false,
		styled: true,
		utils: false
	}
}
