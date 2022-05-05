import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>rest-countries-api</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111517" />
        <meta name="description" content="Project from FrontendMentor " />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
