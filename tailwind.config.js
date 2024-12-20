/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				34: '8.5rem'
			},
			backgroundColor: {
				main: '#0d1117',
				secondColor: '#161b22'
			},
			maxWidth: {
				'8xl': '88rem'
			},
			padding: {
				2.5: '10px'
			}
		}
	},
	plugins: []
}
