/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        regulus: {
          bg: 'rgb(var(--bg-page) / <alpha-value>)',
          subtle: 'rgb(var(--bg-subtle) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
          border: 'rgb(var(--border-subtle) / <alpha-value>)',
          'border-strong': 'rgb(var(--border-strong) / <alpha-value>)',
          text: 'rgb(var(--text-primary) / <alpha-value>)',
          muted: 'rgb(var(--text-secondary) / <alpha-value>)',
          faint: 'rgb(var(--text-faint) / <alpha-value>)',
          accent: 'rgb(var(--accent-primary) / <alpha-value>)',
          'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
          'accent-btn-text': 'rgb(var(--accent-btn-text) / <alpha-value>)',
          'accent-text': 'rgb(var(--accent-text) / <alpha-value>)',
          'accent-soft': 'var(--accent-soft)',
        },
        brand: {
          white: '#FEFEFE',
          grey: '#E7E9F0',
          navy: '#051747',
          slate: '#535F80',
          royal: '#081F62',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};
