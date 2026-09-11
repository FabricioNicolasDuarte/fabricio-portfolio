/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--fd-paper)',
        ink: 'var(--fd-ink)',
        muted: 'var(--fd-muted)',
        signal: 'var(--fd-signal)',
        lime: {
          50: '#f4ffe6',
          100: '#e6ffb8',
          200: '#d4ff80',
          300: '#c0ff4d',
          400: '#A2FF00',
          500: '#8ae000',
          600: '#6bb300',
          700: '#4d8000',
          800: '#335500',
          900: '#1a2b00',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
