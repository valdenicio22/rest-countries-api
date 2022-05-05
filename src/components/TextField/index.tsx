import * as S from './styles'
import { Search as SearcIcon } from '@styled-icons/bootstrap'

export type TextFieldProps = {
  size?: 'small' | 'big'
}

const TextField = ({ size = 'small' }: TextFieldProps) => (
  <S.Wrapper size={size}>
    <S.InputWrapper>
      <S.Icon>
        <SearcIcon />
      </S.Icon>
      <S.Input type="text" placeholder="Search for a country..." />
    </S.InputWrapper>
  </S.Wrapper>
)

export default TextField