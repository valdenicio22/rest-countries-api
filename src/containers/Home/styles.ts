import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 8rem);
    background-color: ${theme.colors.background};
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

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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
      padding-bottom: 10rem;
    `}

    a {
      text-decoration: none;
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;

    height: fit-content;
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2rem;
    padding: 2rem 0 4rem;

    a {
      text-decoration: none;
    }
    > svg {
      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`
