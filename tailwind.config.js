/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#0A0A0F',
        panel: '#111116',
        card: '#18181F',
        border: 'rgba(255,255,255,0.08)',
        primary: '#8B5CF6',
        primaryAlt: '#A855F7',
        primaryHover: '#A78BFA',
        text: '#E4E4E7',
        muted: '#A1A1AA',
        soft: '#71717A',
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
