import 'styled-components'
import { getCurrentTheme, darkMode } from './theme'

const theme = getCurrentTheme(darkMode)
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
