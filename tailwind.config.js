/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './**.html',
    './src/**{.html,tsx,ts}',
    './src/pages/**{.tsx,jsx,ts,js}',
    './src/components/**{.tsx,jsx,ts,js}'
  ],
  theme: {
    extend: {
      screens: {
        mdlg: '1280px',
        xlg: '1600px',
      },
      colors: {
        lightblue: '#059dff',
        indigo: '#6549d5',
        pink: '#e33fa1',
        orange: '#fb5343',
        dark: '#0c0d0f',
        primaryPurple: '#8b7af4',
        primaryPurpleDarker: '#6147c6',
        dark2: '#191b1f',
        dark3: '#22252a',
      }
    }
  },
  plugins: [],
}