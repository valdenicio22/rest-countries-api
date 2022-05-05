import { Country } from 'types/types'
import * as S from './styles'

export type CountryCardProps = {
  country: Pick<Country, 'flags' | 'name' | 'population' | 'region' | 'capital'>
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img
          src={country.flags.svg}
          alt={`flag of the ${country.name.common}`}
        />
      </S.ImgContainer>
      <S.CountryInfoContainer>
        <S.CountryDetail>
          <S.CountryName>{country.name.common}</S.CountryName>

          <S.CountryDetail>
            Population: <S.CountryInfo>{country.population}</S.CountryInfo>
          </S.CountryDetail>
          <S.CountryDetail>
            Region: <S.CountryInfo>{country.region}</S.CountryInfo>
          </S.CountryDetail>
          <S.CountryDetail>
            Capital: <S.CountryInfo>{country.capital}</S.CountryInfo>
          </S.CountryDetail>
        </S.CountryDetail>
      </S.CountryInfoContainer>
    </S.Wrapper>
  )
}

export default CountryCard
