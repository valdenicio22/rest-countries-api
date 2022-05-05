import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkModeBg};
  `}
`

export const FiltersContainer = styled.div`
  width: 100%;
  padding: 2rem 1.6rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 4rem;

  ${media.greaterThan('small')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 4.8rem 6rem;
  `}
`
