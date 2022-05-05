import * as S from './styles'

const Select = () => (
  <S.Wrapper>
    <S.Select name="contries" id="countries">
      <S.Option value="">Filter by Region</S.Option>
      <S.Option value="Africa">Africa</S.Option>
      <S.Option value="America">America</S.Option>
      <S.Option value="Asia">Asia</S.Option>
      <S.Option value="Europe">Europe</S.Option>
      <S.Option value="Oceania">Oceania</S.Option>
    </S.Select>
  </S.Wrapper>
)

export default Select
