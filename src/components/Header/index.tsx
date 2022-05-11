import * as S from './styles'
import { MoonFill as MoonFillIcon } from '@styled-icons/bootstrap'
import { Moon as MoonIcon } from '@styled-icons/bootstrap'
import { Dispatch, SetStateAction } from 'react'

export type HeaderProps = {
  currentTheme: 'dark' | 'light'
  setCurrentTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}

const Header = ({ setCurrentTheme, currentTheme }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderMsg>Where in the world</S.HeaderMsg>
        <S.ThemeButton
          onClick={() =>
            setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        >
          <S.IconContainer>
            {currentTheme === 'dark' ? <MoonFillIcon /> : <MoonIcon />}
          </S.IconContainer>
          <S.CurrentTheme>
            {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </S.CurrentTheme>
        </S.ThemeButton>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
