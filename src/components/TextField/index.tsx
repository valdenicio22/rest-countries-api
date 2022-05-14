import * as S from './styles'
import { Search as SearchIcon } from '@styled-icons/bootstrap'
import { ChangeEventHandler } from 'react'

export type TextFieldProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const TextField = ({ value, onChange }: TextFieldProps) => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.Icon>
        <SearchIcon />
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
