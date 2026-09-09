/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        primary:   '#0d0e12',
        secondary: '#11141a',
        card:      '#161922',
        elevated:  '#222634',

        /* Accent */
        accent: {
          DEFAULT: '#f45b1e',
          light:   '#ff7038',
        },

        /* Text */
        text: {
          main:  '#f8fafc',
          muted: '#94a3b8',
          dim:   '#64748b',
        },

        /* Utility */
        success: '#10b981',
        cyan:    '#00f0ff',

        /* Legacy aliases (keep backward compat) */
        shell:        '#0d0e12',
        panel:        '#121316',
        muted:        '#9CA3AF',
        soft:         '#6B7280',
        primaryAlt:   '#FF5500',
        primaryHover: '#FF6A3D',
      },

      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        arabic:  ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },

      boxShadow: {
        soft:   '0 16px 40px rgba(0,0,0,0.18)',
        accent: '0 0 40px rgba(244,91,30,0.25)',
      },

      borderRadius: {
        xl:  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },

      animation: {
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
