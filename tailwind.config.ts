import type { Config } from 'tailwindcss'

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/home/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/app/*.{js,ts,jsx,tsx}",
    './src/app/page.tsx',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
    
  ],
 
  darkMode: 'class',
  theme: {
    extend: {
      cursor: {
        default: 'default',
        pointer: 'pointer',
      },
      colors: {
        'custom-blue': '#92DEED', // Define your custom color
        'custom-black': 'rgba(17, 17, 43, 1)',
      },
      
      // screens: {
      //   mobile: '320px',
      //   mobileM: '475px',
      //   mobileL: '580px',
      //   mobileXL: '640px',
      //   tablet: '768px',
      //   tabletL: '962px',
      //   laptop: '1024px',
      //   laptopM: '1280px',
      // },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      // fontFamily : {
      //   'sans': ['IranSans', 'ui-sans-serif', 'system-ui']
      // }
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },

      animation: {
        slideIn: 'slideIn 0.5s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  // plugins: [],
  plugins: [require('@tailwindcss/line-clamp'), addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
export default config
