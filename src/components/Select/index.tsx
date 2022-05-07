import { ChangeEventHandler } from 'react'
import * as S from './styles'

type SelectProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>
  selectData: string
}

const Select = ({ onChange, selectData }: SelectProps) => (
  <S.Wrapper>
    <S.Select name="countries" id="countries" onChange={onChange}>
      <S.Option value="" selected={selectData === 'default'}>
        Filter by Region
      </S.Option>
      <S.Option value="Africa" selected={selectData === 'Africa'}>
        Africa
      </S.Option>
      <S.Option value="America" selected={selectData === 'America'}>
        America
      </S.Option>
      <S.Option value="Asia" selected={selectData === 'Asia'}>
        Asia
      </S.Option>
      <S.Option value="Europe" selected={selectData === 'Europe'}>
        Europe
      </S.Option>
      <S.Option value="Oceania" selected={selectData === 'Oceania'}>
        Oceania
      </S.Option>
    </S.Select>
  </S.Wrapper>
)

export default Select
