import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Country } from 'types/types'
import * as S from './styles'
import { ArrowLeft } from '@styled-icons/bootstrap'
import Router from 'next/router'

type CountryDetailsProps = {
  countryData: Country
}

const CountryDetails = ({ countryData }: CountryDetailsProps) => {
  return (
    <S.Wrapper>
      {!countryData && 'Loading...'}
      <S.CountryDetailsContainer>
        <S.BackBtn onClick={() => Router.push('/')}>
          <ArrowLeft width={20} height={20} /> Back
        </S.BackBtn>

        <S.ImgContainer>
          <img
            src={countryData?.flags ? countryData.flags.svg : ''}
            alt={countryData?.name ? countryData.name : ''}
          />
        </S.ImgContainer>

        <S.CountryInfoContainer>
          {countryData?.name && (
            <S.CountryName>{countryData.name}</S.CountryName>
          )}
          <S.CountryDetailList>
            {countryData?.nativeName && (
              <S.CountryDetail>
                Native Name:{' '}
                <S.CountryInfo>{countryData.nativeName}</S.CountryInfo>
              </S.CountryDetail>
            )}
            {countryData?.population && (
              <S.CountryDetail>
                Population:{' '}
                <S.CountryInfo>{countryData.population}</S.CountryInfo>
              </S.CountryDetail>
            )}

            {countryData?.region && (
              <S.CountryDetail>
                Region: <S.CountryInfo>{countryData.region}</S.CountryInfo>
              </S.CountryDetail>
            )}
            {countryData?.subregion && (
              <S.CountryDetail>
                Sub Region:
                <S.CountryInfo>{countryData.subregion}</S.CountryInfo>
              </S.CountryDetail>
            )}
            {countryData?.capital && (
              <S.CountryDetail>
                Capital: <S.CountryInfo>{countryData.capital}</S.CountryInfo>
              </S.CountryDetail>
            )}
            {countryData?.topLevelDomain ? (
              <S.CountryDetail className="extraInfo">
                Top Level Domain:{' '}
                <S.CountryInfo>{countryData.topLevelDomain}</S.CountryInfo>
              </S.CountryDetail>
            ) : (
              []
            )}

            {countryData?.currencies ? (
              <S.CountryDetail>
                Currencies:{' '}
                <S.CountryInfo>
                  {countryData.currencies.map((currency) => currency.code)}
                </S.CountryInfo>
              </S.CountryDetail>
            ) : (
              []
            )}
            {countryData?.languages ? (
              <S.CountryDetail>
                languages:{' '}
                <S.CountryInfo>
                  {countryData.languages.map((language, i) => {
                    if (i === countryData.languages!.length - 1)
                      return language.name
                    return `${language.name}, `
                  })}
                </S.CountryInfo>
              </S.CountryDetail>
            ) : (
              []
            )}
          </S.CountryDetailList>
          {countryData?.borders && (
            <S.CountryBordersContainer>
              <S.BordersLabel>Border Countries: </S.BordersLabel>
              <S.BordersBtnContainer>
                {countryData.borders.map((country) => (
                  <S.BordersBtn key={country}>{country}</S.BordersBtn>
                ))}
              </S.BordersBtnContainer>
            </S.CountryBordersContainer>
          )}
        </S.CountryInfoContainer>
      </S.CountryDetailsContainer>
    </S.Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Array<Country>>(
    'https://restcountries.com/v2/all'
  )
  const paths = response.data.map((country) => {
    return {
      params: {
        country: country.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await axios.get<Country[]>(
    `https://restcountries.com/v2/name/${ctx.params?.country}`
  )
  return {
    props: {
      countryData: response.data[0]
    }
  }
}

export default CountryDetails
