/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pursuit-gold': '#C9972C',
        'pursuit-navy': '#0A2240',
        'pursuit-dark': '#141414',
        'pursuit-light': '#F8F8F8',
      },
      fontFamily: {
        'crimson': ['Crimson Pro', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
