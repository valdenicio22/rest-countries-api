export default {
  border: {
    radius: {
      medium: '0.5rem'
    }
  },
  font: {
    family:
      "Nunito Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
      extraBold: 800
    },
    sizes: {
      xsmall: '1.2rem', // 12px
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
      xxlarge: '2.4rem',
      xxxlarge: '3.2rem' // 32 px
    }
  },
  colors: {
    darkBlue: '#2b3945',
    darkModeBg: '#202c37',

    white: '#FFFFFF',
    DarkGray: '#858585',

    lightModeBg: '#fafafa',
    lightModeText: '#111517'
  },
  containers: {
    mobile: '34.3rem', //375 - 32 = 343px
    desktop: '128.1rem' // 1440 - 160 = 1280px
  }
} as const
