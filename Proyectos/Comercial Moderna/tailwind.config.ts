import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F7941D',
        secondary: '#7B2FBE',
        dark: '#1A1A1A',
        muted: '#6F6F6F',
        surface: '#FFFFFF',
      },
      fontFamily: {
        fustat: ['var(--font-fustat)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F7941D, #7B2FBE)',
      },
      keyframes: {
        blurFadeUp: {
          from: { opacity: '0', filter: 'blur(20px)', transform: 'translateY(40px)' },
          to: { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'blur-fade-up': 'blurFadeUp 0.8s ease-out forwards',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
