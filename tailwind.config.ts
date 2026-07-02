import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(129, 140, 248, 0.22)',
        danger: '0 0 40px rgba(244, 63, 94, 0.22)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee_20s_linear_infinite': 'marquee 20s linear infinite',
      }
    }
  },
  plugins: []
} satisfies Config;
