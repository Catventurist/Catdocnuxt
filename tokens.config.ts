import { defineTheme, palette } from 'pinceau'

export default defineTheme({
  color: {
    primary: palette('purple'),
    black: '#0c0c0d',
    white: '{color.purple.50}',
    dimmed: 'rgba(0, 0, 0, .35)',
    dark: 'rgba(255, 255, 255, .15)',
  },
  transition: {
    all: 'all .1s ease-in-out',
  },
  elements: {
    backdrop: {
      background: {
        initial: '{color.white}',
        dark: '{color.black}',
      },
    },
    border: {
      primary: {
        default: {
          initial: '{color.blue.200}',
          dark: '{color.blue.800}',
        },
      },
    },
    
  },

})
