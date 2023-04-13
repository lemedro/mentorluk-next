/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				customNavy: '#223242',
				customYellow: '#fdd781',
				customWhite: '#fff',
			},
			backgroundImage: {
				landingPage: 'url(/manzara-highres.jpg)',
				teknikGezi: 'url(/teknik-gezi.jpg)',
				teaTalk: 'url(/tea-talk.jpg)',
			},
			backgroundPosition: {
				landingPosition: '72% 0%',
			},
			bg: {
				landingPage: '72% 0%',
			},
			objectPosition: {
				crowd: '0% 60%',
			},
		},
	},
	plugins: [],
};
