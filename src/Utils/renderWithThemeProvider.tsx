import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { getCurrentTheme, darkMode } from 'styles/theme'

type RenderWithThemeProvider = (
  ui: React.ReactElement,
  options?: RenderOptions
) => RenderResult

export const renderWithThemeProvider: RenderWithThemeProvider = (
  ui,
  renderOptions
) => {
  return render(
    <ThemeProvider theme={getCurrentTheme(darkMode)}>{ui}</ThemeProvider>,
    renderOptions
  )
}
