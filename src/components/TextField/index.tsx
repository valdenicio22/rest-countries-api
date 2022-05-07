import * as S from './styles'
import { Search as SearcIcon } from '@styled-icons/bootstrap'
import { ChangeEventHandler } from 'react'

type TextFieldProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const TextField = ({ value, onChange }: TextFieldProps) => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.Icon>
        <SearcIcon />
      </S.Icon>
      <S.Input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
      />
    </S.InputWrapper>
  </S.Wrapper>
)

export default TextField
