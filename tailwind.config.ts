import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0EA5E9',
          dark: '#0369A1'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem'
      }
    }
  },
  plugins: []
}
export default config
