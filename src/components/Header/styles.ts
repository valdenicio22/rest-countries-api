import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 8rem;
    background-color: ${theme.colors.darkBlue};

    display: flex;
    align-items: center;
  `}
`
export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderMsg = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.extraBold};
    line-height: 20px;
    color: ${theme.colors.white};
  `}
`
export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  border: none;
  outline: none;
  background-color: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const CurrentTheme = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
  `}
`
