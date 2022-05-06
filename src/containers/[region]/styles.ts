import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkModeBg};
  `}
`
export const CountryDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 2.7rem 6rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    ${media.greaterThan('medium')`
      max-width: ${theme.containers.desktop};
      width: 100%;
      margin: 0 auto;
      padding: 8rem;

      grid-template-columns: repeat(4, minmax(56rem, 57.4rem));
      grid-template-areas:
      'Btn Btn'
      'Img Details';
    `}
  `}
`

export const Btn = styled.button`
  ${({ theme }) => css`
    width: 10.4rem;
    height: 3.2rem;
    margin-bottom: 6.4rem;
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      grid-area: Btn;
      width: 13.6rem;
      height: 4rem;
      margin-bottom: 8rem;
      font-size: ${theme.font.sizes.medium};
    `}

    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};

    border: none;
    border-radius: ${theme.border.radius.medium};
    font-weight: ${theme.font.weight.light};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
export const ImgContainer = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    height: 22.9rem;

    border-radius: ${theme.border.radius.medium};
    margin-bottom: 4rem;

    ${media.greaterThan('medium')`
        grid-area: Img;
        width: 56rem;
        height: min(30rem, 40.1rem);
        margin: none;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: ${theme.border.radius.medium};
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

    color: ${theme.colors.white};

    ${media.greaterThan('large')`
      grid-area: Details;
      width: 57.4rem;
      height: min(30rem, 32.3rem);
      margin-left: 14rem;
    `}
  `}
`

export const CountryName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.extraBold};
    line-height: 3rem;
    padding-bottom: 1.6rem;

    ${media.greaterThan('large')`
      grid-area: Details;
      width: 57.4rem;
      height: min(30rem, 32.3rem);

      font-size: ${theme.font.sizes.xxxlarge};
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

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.medium};

      .extraInfo {
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
  height: 100%;

  margin-top: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`

export const BordersLabel = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};

    display: block;
  `}
`
export const BordersBtnContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;
  gap: 1rem;
`

export const BordersBtn = styled.button`
  ${({ theme }) => css`
    width: 7.27rem;
    height: 3.2rem;
    text-align: center;

    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.medium};

    border: none;
    border-radius: ${theme.border.radius.medium};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
