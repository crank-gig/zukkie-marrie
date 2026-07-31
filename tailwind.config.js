/** Tailwind theme extending the ZUKKIE-MARIE brand palette. */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3FB',
          100: '#DCE7F7',
          200: '#B9CDEE',
          300: '#8AAAD9',
          400: '#5A7FB8',
          500: '#33578F',
          600: '#1F3E6F',
          700: '#1B3157',
          800: '#132441',
          900: '#0F1E3C',
          950: '#0A1428',
        },
        gold: {
          50: '#FBF6EA',
          100: '#F5E9C9',
          200: '#EBD59B',
          300: '#DEBC6C',
          400: '#D2A94F',
          500: '#C89B3C',
          600: '#A87E2C',
          700: '#835F21',
          800: '#5C421A',
          900: '#3A2A12',
        },
        sage: {
          50: '#F4F8EE',
          100: '#E4EDDC',
          200: '#CFE0BF',
          300: '#B2CB9A',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 30, 60, 0.04), 0 12px 32px -12px rgba(15, 30, 60, 0.18)',
        lift: '0 8px 20px -6px rgba(15, 30, 60, 0.18), 0 32px 60px -24px rgba(15, 30, 60, 0.30)',
        glow: '0 0 0 1px rgba(200, 155, 60, 0.35), 0 18px 50px -18px rgba(200, 155, 60, 0.45)',
      },
      maxWidth: {
        content: '76rem',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
