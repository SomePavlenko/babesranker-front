/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/features/colors')
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				34: '8.5rem',
				25: '6.25rem',
				60: '15rem',
				7.5: '1.875rem',
				84: '21rem'
			},
			width: {
				51: '12.75rem',
				37.5: '9.375rem'
			},
			backgroundColor: {
				primary: colors.primary,
				secondColor: colors.secondary,
				primaryButtonColor: colors.primaryButtonColor
			},
			maxWidth: {
				'8xl': '88rem'
			},
			minWidth: {
				7.5: '1.875rem'
			},
			padding: {
				2.5: '0.625rem'
			},
			borderColor: {
				primaryBorder: colors.primaryBorder
			},
			textColor: {
				primaryText: colors.primaryText
			},
			fontSize: {
				m: '0.875rem'
			},
			aspectRatio: {
				'3/4': '3 / 4'
			}
		}
	},
	plugins: []
}
