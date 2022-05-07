import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 8rem);
    background-color: ${theme.colors.darkModeBg};
  `}
`

export const FiltersContainer = styled.div`
  padding: 2.4rem 1.6rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 4rem;

  ${media.greaterThan('large')`
    ${({ theme }) => css`
      width: ${theme.containers.desktop};
      margin: 0 auto;

      padding: 4.8rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    `}
  `}
`
export const CountryCardList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 26.4rem);
    gap: 4rem;

    padding: 0 5.5rem;
    ${media.greaterThan('large')`
      gap: 7.5rem;
      width: ${theme.containers.desktop};
      margin: 0 auto;
      padding: 0;
    `}

    a {
      text-decoration: none;
    }
  `}
`
