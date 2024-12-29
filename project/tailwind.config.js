/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        auzrix: {
          black: '#000000',
          white: '#FFFFFF',
          red: {
            DEFAULT: '#ff0000',
            dark: '#cc0000'
          },
          gray: {
            DEFAULT: '#a0a0a0',
            dark: '#1a1a1a',
            light: '#d4d4d4'
          }
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        body: ['Open Sans', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'gradient-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'katana-shine': 'katanaShine 2s ease-in-out infinite'
      },
      keyframes: {
        katanaShine: {
          '0%, 100%': {
            'background-position': '200% center'
          },
          '50%': {
            'background-position': '-200% center'
          }
        }
      }
    }
  },
  plugins: []
};