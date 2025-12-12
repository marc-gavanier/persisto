/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      'on-body': '#b8b8b8',
      body: '#121212',
      'body-secondary': '#1e1e1e'
    },
    extend: {}
  },
  plugins: []
};
