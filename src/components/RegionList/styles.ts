import styled, { css } from 'styled-components'
import media from 'styled-media-query'
type Props = {
  toggle: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 4.8rem;

    ${media.greaterThan('medium')`
      height: 5.6rem;
    `}

    background-color: ${theme.colors.elements};

    box-shadow: ${theme.shadow.boxShadow};

    position: relative;
  `}
`
export const RegionList = styled.ul`
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

const regionModifiers = {
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

export const Region = styled.li<Props>`
  ${({ toggle }) => css`
    width: 20rem;
    height: 4.8rem;

    text-align: center;
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
      background-color: #3f5161;
    }

    ${media.greaterThan('medium')`
      height: 5.6rem;
    `}
    padding: 0 2rem;

    &:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ${toggle && regionModifiers.remove()}
  `}
`
