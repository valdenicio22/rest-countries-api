import * as S from './styles'
import { Search as SearcIcon } from '@styled-icons/bootstrap'

const TextField = () => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.Icon>
        <SearcIcon />
      </S.Icon>
      <S.Input type="text" placeholder="Search for a country..." />
    </S.InputWrapper>
  </S.Wrapper>
)

export default TextField
