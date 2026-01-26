/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['attribute', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['var(--font-geist-mono)', 'monospace'],
      'primary': ['var(--font-geist-mono)', 'monospace'],
      'secondary': ['var(--font-geist-sans)', 'sans-serif'], // same as the default font
    },
  },
  plugins: [],
}