/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#0D0E12',
        panel: '#121316',
        card: '#1A1C23',
        border: 'rgba(255,255,255,0.08)',
        primary: '#FF5722',
        primaryAlt: '#FF5500',
        primaryHover: '#FF6A3D',
        text: '#FFFFFF',
        muted: '#9CA3AF',
        soft: '#6B7280',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
