import { Country } from 'types/types'
import * as S from './styles'

export type CountryCardProps = {
  country: Pick<
    Country,
    'flags' | 'name' | 'population' | 'region' | 'capital' | 'area'
  >
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <img src={country.flags?.svg} alt={`flag of the ${country.name}`} />
      </S.ImgContainer>
      <S.CountryInfoContainer>
        <S.CountryName>{country.name}</S.CountryName>
        {!!country.population && (
          <S.CountryDetail>
            Population:{' '}
            <S.CountryInfo>
              {new Intl.NumberFormat('en-US').format(country.population)}
            </S.CountryInfo>
          </S.CountryDetail>
        )}
        {country.region && (
          <S.CountryDetail>
            Region: <S.CountryInfo>{country.region}</S.CountryInfo>
          </S.CountryDetail>
        )}
        {country.capital && (
          <S.CountryDetail>
            Capital: <S.CountryInfo>{country.capital}</S.CountryInfo>
          </S.CountryDetail>
        )}
        {country.area && (
          <S.CountryDetail>
            Area:{' '}
            <S.CountryInfo>
              {new Intl.NumberFormat('en-US').format(country.area)} km&sup2;
            </S.CountryInfo>
          </S.CountryDetail>
        )}
      </S.CountryInfoContainer>
    </S.Wrapper>
  )
}

export default CountryCard
