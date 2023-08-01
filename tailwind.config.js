/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/test-tw-components/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      colors: {
        blue: "#00FFFF",
        yellow: "#FFFF00",
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
    plugins: [],
  }
}