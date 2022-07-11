module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      background: {
        primary: 'var(--color-background-primary)',
        secondary: 'var(--color-background-secondary)',
        tertiary: 'var(--color-background-tertiary)',

        custom: 'var(--color-background-custom)',
      },
      text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',

        custom: 'var(--color-text-custom)',
      },
    },
  },
  plugins: [],
}
