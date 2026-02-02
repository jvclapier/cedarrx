import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CedarRX Enhanced Brand Colors
        cedar: {
          DEFAULT: '#2D5F4F',
          forest: '#1E4038',
          light: '#3D7A64',
          teal: '#5A9B82',
        },
        // Logo accent color - use sparingly
        lime: {
          DEFAULT: '#89b92b',
          light: '#9fc94a',
          dark: '#6d9422',
        },
        terra: {
          DEFAULT: '#D4816B',
          warm: '#D4816B',
        },
        burgundy: {
          DEFAULT: '#6B2D38',
          deep: '#6B2D38',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          light: '#A8B5A0',
        },
        cream: {
          DEFAULT: '#FBF9F6',
          light: '#F5F3EF',
          card: '#E8E5DF',
        },
        neutral: {
          border: '#D4D1C9',
          text: '#4A5568',
          dark: '#1A202C',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        serif: ['Crimson Pro', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
