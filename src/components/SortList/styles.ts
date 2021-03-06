import styled, { css } from 'styled-components'
import media from 'styled-media-query'
type Props = {
  toggle: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    height: 4.8rem;

    ${media.greaterThan('large')`
      width: 20rem;
      height: 5.6rem;
    `}

    background-color: ${theme.colors.elements};

    box-shadow: ${theme.shadow.boxShadow};

    position: relative;
  `}
`
export const SortList = styled.ul`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    list-style: none;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
    background-color: ${theme.colors.elements};
    color: ${theme.colors.text};

    position: absolute;
    z-index: 1;
  `}
`

const sortItemModifiers = {
  remove: () => css`
    display: none;

    &:first-child {
      display: block;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `
}

export const SortItem = styled.li<Props>`
  ${({ theme, toggle }) => css`
    width: 16rem;
    height: 4.8rem;

    text-align: center;
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
      background-color: ${theme.colors.background};
    }

    ${media.greaterThan('large')`
      width: 20rem;
      height: 5.6rem;
    `}
    padding: 0 2rem;

    &:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ${toggle && sortItemModifiers.remove()}
  `}
`
