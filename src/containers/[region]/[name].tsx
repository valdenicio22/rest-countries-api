import * as S from './styles'

const CountryDetails = () => {
  return (
    <S.Wrapper>
      <S.Btn>Back</S.Btn>
      <S.ImgContainer>
        <img src="" alt="" />
      </S.ImgContainer>
      <S.CountryInfoContainer>
        <S.CountryName>Belgium</S.CountryName>
        <S.CountryDetail>
          Native Name: <S.CountryInfo>Belgié</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Population: <S.CountryInfo>11.319.511</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Region: <S.CountryInfo>Europe</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Sub Region: <S.CountryInfo>Western Europe</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Capital: <S.CountryInfo>Brussets</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Top Level Domain <S.CountryInfo>.be</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          Currencies <S.CountryInfo>Euro</S.CountryInfo>
        </S.CountryDetail>
        <S.CountryDetail>
          languages <S.CountryInfo>Dutch, French, German</S.CountryInfo>
        </S.CountryDetail>
      </S.CountryInfoContainer>
      <S.CountryBordersContainer>
        <S.CountryDetail>
          Border Countries: <S.Btn>France</S.Btn> <S.Btn>Germany</S.Btn>{' '}
          <S.Btn>Netherlands</S.Btn>{' '}
        </S.CountryDetail>
      </S.CountryBordersContainer>
    </S.Wrapper>
  )
}

export default CountryDetails
