/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'League-Spartan': ['Leage Spartan', 'sans-serif'],
      },
      textColor: {
        skin: {
          a: 'var(--color-text-a)',
          b: 'var(--color-text-b)',
          c: 'var(--color-text-c)',
          d: 'var(--color-text-d)'
        }
      },
      backgroundColor: {
        skin: {
          main: 'var(--color-bg-main)',
          keypad: 'var(--color-bg-keypad)',
          screen: 'var(--color-bg-screen)',
          'btn1-bg': 'var(--color-btn1-bg)',
          'btn2-bg': 'var(--color-btn2-bg)',
          'btn3-bg': 'var(--color-btn3-bg)',
          'toggle-bg': 'var(--color-toggle-bg)',
          toggle: 'var(--color-toggle)',

        }
      },
      boxShadowColor: {
        skin: {
          'btn1-shadow': 'var(--color-btn1-shadow)',
          'btn2-shadow': 'var(--color-btn2-shadow)',
          'btn3-shadow': 'var(--color-btn3-shadow)',
        }
      }
    },
  },
  plugins: [],
}
