/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color-light': '#3b82f6',
        'primary-color-dark': '#2563eb',
        'primary-background-color': '#6b7280',
        'secondary-background-color': '',
      },
    },
  },
  plugins: [],
}