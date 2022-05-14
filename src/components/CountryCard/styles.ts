import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 26.4rem;

    height: 33.6rem;
    background-color: ${theme.colors.elements};

    border-radius: 0.5rem;
    box-shadow: ${theme.shadow.boxShadow};

    ${media.greaterThan('large')`
      &:hover {
        transform: scale(1.08);
      }
    `}
  `}
`
export const ImgContainer = styled.div`
  img {
    width: 100%;
    height: 16rem;
    object-fit: cover;

    border-radius: 0.5rem 0.5rem 0 0;
  }
`

export const CountryInfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 17.6rem;
    color: ${theme.colors.text};

    padding: 1.5rem 2.4rem 3.6rem;
  `}
`
export const CountryName = styled.p`
  ${({ theme }) => css`
    text-overflow: ellipsis;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.extraBold};

    padding-bottom: 1.4rem;
  `}
`
export const CountryDetail = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    line-height: 1.6rem;

    & + p {
      padding-top: 0.8rem;
    }
  `}
`
export const CountryInfo = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.light};
    line-height: 1.6rem;
  `}
`
