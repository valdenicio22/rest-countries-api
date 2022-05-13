import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - 8rem);
    background-color: ${theme.colors.background};
  `}
`
export const CountryDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 2.7rem 6rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    ${media.greaterThan('large')`
      max-width: ${theme.containers.desktop};
      width: 100%;
      margin: 0 auto;
      padding: 8rem 0;
      gap: 0 12rem;

      display: grid;
      grid-template-columns: repeat(2, minmax(56rem, 57.4rem));
      grid-template-rows: auto auto;
      grid-template-areas:
      'Btn Btn'
      'Img Details';
    `}
  `}
`

export const BackBtn = styled.button`
  ${({ theme }) => css`
    width: 10.4rem;
    height: 3.2rem;
    margin-bottom: 6.4rem;
    font-size: ${theme.font.sizes.small};
    box-shadow: ${theme.shadow.boxShadow};

    ${media.greaterThan('medium')`
      grid-area: Btn;
      width: 13.6rem;
      height: 4rem;
      margin-bottom: 8rem;
      font-size: ${theme.font.sizes.medium};
    `}

    background-color: ${theme.colors.elements};
    color: ${theme.colors.text};

    border: none;
    border-radius: ${theme.border.radius.medium};
    font-weight: ${theme.font.weight.light};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
export const ImgContainer = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    max-height: 22.9rem;

    border-radius: ${theme.border.radius.medium};
    margin-bottom: 4rem;

    ${media.greaterThan('medium')`
        grid-area: Img;
        max-height: 40.1rem;
        width: 56rem;
        margin: none;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: ${theme.border.radius.medium};
      box-shadow: ${theme.shadow.boxShadow};
    }
  `}
`

export const CountryInfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    color: ${theme.colors.text};

    ${media.greaterThan('large')`
      grid-area: Details;

      `}
  `}
`

export const CountryName = styled.h2`
  ${({ theme }) => css`
    width: fit-content;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.extraBold};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xxxlarge};
      margin-bottom: 2.3rem;
    `}
  `}
`
export const CountryDetailList = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;

  .extraInfo {
    margin-top: 3.2rem;
  }

  ${media.greaterThan('large')`
    max-height: 16rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column wrap;

    .extraInfo {
      margin-top: 0rem;
    }
  `}
`

export const CountryDetail = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    line-height: 3rem;

    max-width: 25rem;
    max-height: 3rem;
    overflow: hidden;

    &:nth-child(6) {
      margin-top: 3.2rem;
    }

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.medium};
      &:nth-child(6) {
        margin-top: 0;
      }

    `}
  `}
`
export const CountryInfo = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
    line-height: 2.5rem;
  `}
`

export const CountryBordersContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;
  gap: 1rem;

  padding-top: 3.2rem;

  ${media.greaterThan('large')`
    padding-top: 2rem;
  `}
`

export const BordersLabel = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`
export const BordersBtnContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;
  gap: 1rem;
  text-decoration: none;
`

export const BordersBtn = styled.button`
  ${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 1rem;
    text-align: center;

    background-color: ${theme.colors.elements};
    color: ${theme.colors.text};

    font-size: ${theme.font.sizes.medium};

    border: none;
    border-radius: ${theme.border.radius.medium};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.05);
    }
    box-shadow: ${theme.shadow.boxShadow};
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
    padding-bottom: 5rem;

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
