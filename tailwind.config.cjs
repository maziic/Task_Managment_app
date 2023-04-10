const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			green: {
				one: '#9CA3AF',
				two: '#DDEEE9',
				three: '#C6E2D9',
				four: '#8CC5B3',
				five: '#39705E'
			},
			gray: {
				btn: '9CA3AF',
				one: '#E5E7EB',
				two: '#D1D5DB',
				three: '#4B5563',
				four: '#374151',
				five: '#111827'
			},
			cream: '#FCFBF4',
			yellow: '#FACA15',
			teal: '#1F2833',
			lightblue: '#e8f8ec',
			lightyellow: '#fffbd5'
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
