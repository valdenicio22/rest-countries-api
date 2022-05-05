import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/nunito-sans-v11-latin-300.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/nunito-sans-v11-latin-regular.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/nunito-sans-v11-latin-600.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/nunito-sans-v11-latin-800.woff2') format('woff2')
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px - 1rem
    }
    body {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.regular};
    }
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}
`
export default GlobalStyles
