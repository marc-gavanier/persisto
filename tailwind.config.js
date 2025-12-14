/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  safelist: [
    { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/ },
    { pattern: /p-([12345])/ },
    { pattern: /px-([12345])/ },
    { pattern: /py-([12345])/ },
    'rounded-lg',
    'items-center',
    'border'
  ],
  plugins: []
};
