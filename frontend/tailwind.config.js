/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': 'var(--accent-color)',
        'text-primary': 'var(--text-primary)',
        'background': 'var(--background)',
      },
    },
  },
  plugins: [],
}
