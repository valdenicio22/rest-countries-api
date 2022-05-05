import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 4.8rem;

    ${media.greaterThan('medium')`
      height: 5.6rem;
    `}

    background-color: ${theme.colors.darkBlue};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${theme.border.radius.medium};
  `}
`
export const Select = styled.select`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBlue};

    padding-right: 4rem;
    border: none;
    outline: none;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small}
    `}
  `}
`
export const Option = styled.option``
