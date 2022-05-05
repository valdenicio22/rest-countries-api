import * as S from './styles'
import { MoonFill as MoonFillIcon } from '@styled-icons/bootstrap'
import { Moon as MoonIcon } from '@styled-icons/bootstrap'
import { useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderMsg>Where in the world</S.HeaderMsg>
        <S.ThemeButton onClick={() => setIsDarkMode((prev) => !prev)}>
          <S.IconContainer>
            {isDarkMode ? <MoonFillIcon /> : <MoonIcon />}
          </S.IconContainer>
          <S.CurrentTheme>Dark Mode</S.CurrentTheme>
        </S.ThemeButton>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
