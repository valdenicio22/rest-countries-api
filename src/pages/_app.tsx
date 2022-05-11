import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import { getCurrentTheme, darkMode, lightMode } from '../styles/theme'

type CurrentTheme = 'dark' | 'light'

function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<CurrentTheme>('dark')
  return (
    <ThemeProvider
      theme={getCurrentTheme(currentTheme === 'dark' ? darkMode : lightMode)}
    >
      <Head>
        <title>rest-countries-api</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111517" />
        <meta name="description" content="Project from FrontendMentor " />
      </Head>
      <GlobalStyles />
      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
