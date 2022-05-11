import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 4.8rem;

    ${media.greaterThan('medium')`
      height: 5.6rem;
    `}

    background-color: ${theme.colors.elements};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.shadow.boxShadow};
  `}
`
export const Select = styled.select`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}

    padding-left: 2.5rem;
    padding-right: 4rem;
    border: none;
    outline: none;
  `}
`

export const Option = styled.option`
  border: 1px solid red;
`
