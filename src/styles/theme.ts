type CurrentTheme = {
  colors: {
    text: string
    background: string
    elements: string
  }
  shadow: {
    boxShadow: string
  }
}

export const darkMode = {
  colors: {
    text: '#FFFFFF',
    background: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)'
  },
  shadow: {
    boxShadow: '0rem 0rem 0.5rem rgba(0, 0, 0, 0.3)'
  }
}
export const lightMode = {
  colors: {
    text: 'hsl(200, 15%, 8%)',
    background: '#f2f2f2',
    elements: '#FFFFFF'
  },
  shadow: {
    boxShadow: '0rem 0rem 0.7rem rgba(0, 0, 0, 0.3)'
  }
}

export const getCurrentTheme = (currentTheme: CurrentTheme) => {
  return {
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
      background: currentTheme.colors.background,
      elements: currentTheme.colors.elements,
      text: currentTheme.colors.text,
      gray: 'hsl(0, 0%, 52%)'
    },
    shadow: {
      boxShadow: currentTheme.shadow.boxShadow
    },
    containers: {
      mobile: '34.3rem', //375 - 32 = 343px
      desktop: '128.1rem' // 1440 - 160 = 1280px
    }
  }
}
