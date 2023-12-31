/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      colors: {
        bckgDark: '#181C27',
        primary: '#6167FF'
      },
    },
	},
	plugins: [],
}
