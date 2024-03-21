import type { Config } from "tailwindcss"
const { nextui } = require("@nextui-org/react");

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  prefix: "",
  theme: {
    fill: {
      'dark-shade': '#2B435E',
      'white': '#ffffff',
    },
    fontFamily: {
      'sans': ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      animation: {
        'thinking-1': 'thinking 1s 0.3s infinite cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        'thinking-2': 'thinking 1s 0.425s infinite cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        'thinking-3': 'thinking 1s 0.55s infinite cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      },
      keyframes: {
        'thinking': {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-60%)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      spacing: {
        8: '30px',
      },
      borderRadius: {
        '4xl': '25px',
      },
      backgroundColor: {
        'border': '#cccccc',
        'light-shade': '#F5F6F4',
        'light-accent': '#9C855F',
        'base-color': '#999BA7',
        'dark-accent': '#7E6469',
        'dark-shade': '#2B435E',
        'main-button': '#1e2d3b',
        'main-button-hover': '#141e27',
        'white': '#ffffff',
        'black': '#000000',
      },
      textColor: {
        'dark-shade': '#2B435E',
        'error': '#f44336',
      },
      borderColor: {
        'error': '#f44336',
        'border-color': '#cccccc',
      },
      maxWidth: {
        'maxWidth': '768px',
      },
      gridTemplateRows: {
        'layout': '1fr auto',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    layout: {
      spacingUnit: 4, // in px
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      dividerWeight: "1px", // h-divider the default height applied to the divider component
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    },
    themes: {
      light: {
        layout: {
          hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          },
        },
      },
      dark: {
        layout: {
          hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          },
        },
      },
    },
  })],
  variants: {
    fill: ['hover'],
  }
} satisfies Config

export default config