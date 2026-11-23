/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: 'var(--background)',
        panel: 'var(--card)',
        card: 'var(--card)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        primaryAlt: 'var(--primary)',
        primaryHover: 'var(--primary-hover)',
        text: 'var(--foreground)',
        muted: 'var(--muted-foreground)',
        soft: 'var(--muted-foreground)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
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
