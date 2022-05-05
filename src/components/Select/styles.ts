import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 4.8rem;

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

    padding-left: 2.5rem;
    padding-right: 6rem;
    border: none;
    outline: none;
  `}
`
export const Option = styled.option``
