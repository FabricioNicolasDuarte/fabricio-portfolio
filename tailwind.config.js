/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"ABCWhytePlus"', '"ABCWhyte"', 'system-ui', 'sans-serif'],
        display: ['"ABCWhytePlus"', 'system-ui', 'sans-serif'],
        stencil: ['"Hexaframe"', 'system-ui', 'sans-serif'],
        mono: ['"IBMPlexMono"', 'monospace'],
      },
      colors: {
        obsidian: '#000000',
        surface: '#0a0a0a',
        ink: '#000000',
        muted: '#888888',
        kpr: {
          black: '#000000',
          white: '#ffffff',
          green: '#c0fb50',
          lavender: '#968adf',
          lavenderLight: '#9b96f3',
          blue: '#8ca6ff',
          gray: '#e1e1e1',
        },
        lime: {
          400: '#c0fb50',
          300: '#d1fc7d',
        },
      },
    },
  },
  plugins: [],
}
