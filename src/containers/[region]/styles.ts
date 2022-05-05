import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.darkModeBg};
  `}
`
export const Btn = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    padding: 1rem 3.5rem;
    border-radius: ${theme.border.radius.medium};
  `}
`
export const ImgContainer = styled.div`
  ${({ theme }) => css`
    img {
      width: 56rem;
      height: 40.1rem;
      object-fit: fill;

      border-radius: ${theme.border.radius.medium};
    }
  `}
`

export const CountryInfoContainer = styled.div``

export const CountryName = styled.p``
export const CountryDetail = styled.p``
export const CountryInfo = styled.span``
export const CountryBordersContainer = styled.div``
