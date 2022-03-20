module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(33, 33, 33, 0.98)',
      },
    },
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1040px',
      xl: '1640px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
