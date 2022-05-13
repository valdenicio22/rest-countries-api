import { useContext } from 'react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Country } from 'types/types'
import * as S from './styles'
import { ArrowLeft } from '@styled-icons/bootstrap'
import Router from 'next/router'
import Link from 'next/link'
import {
  getAlpha3CodeAndName,
  updateCountryBorders
} from 'Utils/getBordersName'
import { Github, Linkedin, PersonCircle } from '@styled-icons/bootstrap'
import { ThemeContext } from 'styled-components'

type CountryDetailsProps = {
  countryData: Country
}
const CountryDetails = ({ countryData }: CountryDetailsProps) => {
  const { colors } = useContext(ThemeContext)

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
              <S.CountryDetail>
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
          <S.CountryBordersContainer>
            <S.BordersLabel>Border Countries: </S.BordersLabel>

            {countryData.borders?.map((borderCountry) => {
              if (borderCountry.includes('None')) return <p>{borderCountry}</p>
              return (
                <Link
                  href={`/${borderCountry}`}
                  key={countryData.alpha3Code}
                  passHref
                >
                  <S.BordersBtnContainer key={borderCountry}>
                    <S.BordersBtn>{borderCountry}</S.BordersBtn>
                  </S.BordersBtnContainer>
                </Link>
              )
            })}
          </S.CountryBordersContainer>
        </S.CountryInfoContainer>
      </S.CountryDetailsContainer>
      <S.Footer>
        <Link href={'https://github.com/valdenicio22'} passHref>
          <Github width={25} height={25} color={colors.text} />
        </Link>
        <Link href={'https://www.linkedin.com/in/valdenicioferreira/'} passHref>
          <Linkedin width={25} height={25} color={colors.text} />
        </Link>
        <Link href={'https://valdenicio22.vercel.app/'} passHref>
          <PersonCircle width={25} height={25} color={colors.text} />
        </Link>
      </S.Footer>
    </S.Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Array<Country>>(
    'https://restcountries.com/v2/all'
  )
  console.log(getAlpha3CodeAndName(response.data))
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
  const country = updateCountryBorders(response.data[0])
  return {
    props: {
      countryData: country
    }
  }
}

export default CountryDetails
