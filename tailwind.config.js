/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
    },
    fontFamily: {
      'sans': ['var(--font-geist-mono)', 'monospace'], // default font
      'primary': ['var(--font-geist-mono)', 'monospace'],
      'secondary': ['var(--font-geist-sans)', 'sans-serif'], // same as the default font
    },
  },
  plugins: [],
}