module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1040px',
      xl: '1640px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
