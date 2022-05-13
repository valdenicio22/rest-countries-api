import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2.6rem;

  padding: 1.6rem 3.2rem;

  ${media.greaterThan('medium')`
    padding: 1.8rem 3.2rem;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    & > svg {
      width: 1.6rem;
      height: 1.6rem;

      ${media.greaterThan('medium')`
        width: 1.8rem;
        height: 1.8rem;
      `}
      color: ${theme.colors.text};
      font-weight: ${theme.font.weight.extraBold};
    }
    cursor: pointer;
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    background: transparent;
    border: none;
    outline: none;

    font-size: ${theme.font.sizes.xsmall};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
    line-height: 2rem;
    color: ${theme.colors.text};

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 34.3rem;
    height: 4.8rem;

    ${media.greaterThan('large')`
      width: 48rem;
      height: 5.6rem;
    `}

    border-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.elements};
    box-shadow: ${theme.shadow.boxShadow};
  `}
`
