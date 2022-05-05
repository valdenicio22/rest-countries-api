import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'
type WrapperProps = Pick<TextFieldProps, 'size'>

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2.6rem;

  padding: 1.6rem 3.2rem;
`
export const Icon = styled.div`
  ${({ theme }) => css`
    & > svg {
      width: 1.6rem;
      height: 1.6rem;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.extraBold};
    }
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    background: transparent;
    border: none;
    outline: none;

    font-size: ${theme.font.sizes.small};
    line-height: 2rem;
    color: ${theme.colors.white};

    &::placeholder {
      opacity: 0.9;
    }
  `}
`

const wrapperModifiers = {
  size: (theme: DefaultTheme) => css`
    width: 48rem;
    height: 5.6rem;
    font-size: ${theme.font.sizes.medium};

    ${Icon} {
      & > svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    width: 34.3rem;
    height: 4.8rem;
    border-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.darkBlue};

    ${size === 'big' && wrapperModifiers.size(theme)};
  `}
`
