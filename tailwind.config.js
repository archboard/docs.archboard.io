const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        tidal: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
        sonar: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      typography (theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
    }
  },
  variants: {
    extend: {
      typography: ["dark"]
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
