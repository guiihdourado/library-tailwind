/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FEC437',
        'primary-hover': '#F5AF04',

        success: '#4BAF4F',
        'success-hover': '#409644',
        error: '#FF0000',
        warning: '#FDBA01',
        info: '#0C83D9',

        'slate-1': '#151B26',
        'slate-2': '#273240',
        'slate-3': '#9C9C9C',
        'slate-4': '#C5C5C5',
        'slate-5': '#E6E6E6',
        'slate-6': '#F5F5F5',
        'slate-7': '#EDEDED',

      }
    },
  },
  variants: {},
  plugins: [],
}
