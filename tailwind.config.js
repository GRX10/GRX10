/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141414',
        'dark-card': '#1a1a1a',
        'primary-pink': '#E1198B',
        'text-white': '#ffffff',
        'text-gray': '#a0a0a0',
        'heading-color': '#585858',
        'purple': '#8338ec',
        'purple-light': '#6667ab',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #E1198B 0%, #8338ec 100%)',
        'gradient-purple': 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)',
        'gradient-card': 'linear-gradient(165deg, #310B20 0%, #1E1E32 100%)',
        'gradient-team': 'linear-gradient(180deg, #141414 0%, #0f0514 50%, #141414 100%)',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        'container': '1400px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

