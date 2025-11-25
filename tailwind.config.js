/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#195FAC',
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0A3671',
        },
        medical: {
          light: '#64B5F6',
          DEFAULT: '#1976D2',
          dark: '#0D47A1',
          pale: '#E3F2FD',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(25, 95, 172, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(25, 95, 172, 0.5)' },
        },
      }
    },
  },
  plugins: [],
}