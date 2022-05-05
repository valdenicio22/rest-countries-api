import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    border: none;

    height: 4.8rem;
    background-color: ${theme.colors.darkBlue};
    padding: 1.4rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const Select = styled.select`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBlue};
    border-radius: ${theme.border.radius.medium};
    padding-right: 6rem;
    border: none;
    outline: none;
  `}
`
export const Option = styled.option``
