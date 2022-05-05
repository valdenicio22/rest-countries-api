import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const customViewports = {
  kindleFire2: {
    name: 'mobile',
    styles: {
      width: '375px',
      height: '600px'
    }
  },
  kindleFireHD: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px'
    }
  }
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  viewport: { viewports: customViewports }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
