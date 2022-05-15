import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 8rem;
    background-color: ${theme.colors.elements};
    padding: 0 1.6rem;

    ${media.greaterThan('large')`
      padding: 0 8rem;
    `}

    display: flex;
    align-items: center;
  `}
`
export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderMsg = styled.h1`
  ${({ theme }) => css`
    line-height: 20px;
    font-weight: ${theme.font.weight.extraBold};
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
    color: ${theme.colors.text};

    cursor: pointer;
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

    ${media.greaterThan('medium')`
      width: 1.8rem;
      height: 1.8rem;
    `}

    color: ${theme.colors.text};
    font-weight: ${theme.font.weight.bold};

    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.3rem;
  `}
`
export const CurrentTheme = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
    color: ${theme.colors.text};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
