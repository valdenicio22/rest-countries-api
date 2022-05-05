import Header from '.'
import { renderWithThemeProvider } from '../../Utils/renderWithThemeProvider'

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithThemeProvider(<Header />)
  })
})
