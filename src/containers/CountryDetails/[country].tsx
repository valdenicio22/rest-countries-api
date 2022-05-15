import { useContext } from 'react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Country } from 'types/types'
import * as S from './styles'
import { ArrowLeft } from '@styled-icons/bootstrap'
import Router from 'next/router'
import Link from 'next/link'
import { updateCountryBorders } from 'Utils/getBordersName'
import { Github, Linkedin, PersonCircle } from '@styled-icons/bootstrap'
import { ThemeContext } from 'styled-components'

type CountryDetailsProps = {
  country: Country
}
const CountryDetails = ({ country }: CountryDetailsProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.Wrapper>
      {country ? (
        <>
          <S.CountryDetailsContainer>
            <S.BackBtn onClick={() => Router.push('/')}>
              <ArrowLeft width={20} height={20} /> Back
            </S.BackBtn>

            <S.ImgContainer>
              <img
                src={country.flags ? country.flags.svg : ''}
                alt={country.name}
              />
            </S.ImgContainer>

            <S.CountryInfoContainer>
              {<S.CountryName>{country.name}</S.CountryName>}
              <S.CountryDetailList>
                {country.nativeName && (
                  <S.CountryDetail>
                    Native Name:{' '}
                    <S.CountryInfo>{country.nativeName}</S.CountryInfo>
                  </S.CountryDetail>
                )}
                {!!country.population && (
                  <S.CountryDetail>
                    Population:{' '}
                    <S.CountryInfo>{country.population}</S.CountryInfo>
                  </S.CountryDetail>
                )}

                {country.region && (
                  <S.CountryDetail>
                    Region: <S.CountryInfo>{country.region}</S.CountryInfo>
                  </S.CountryDetail>
                )}
                {!!country.subregion && (
                  <S.CountryDetail>
                    Sub Region:{' '}
                    <S.CountryInfo>{country.subregion}</S.CountryInfo>
                  </S.CountryDetail>
                )}
                {!!country.capital && (
                  <S.CountryDetail>
                    Capital: <S.CountryInfo>{country.capital}</S.CountryInfo>
                  </S.CountryDetail>
                )}
                {country.topLevelDomain ? (
                  <S.CountryDetail>
                    Top Level Domain:{' '}
                    <S.CountryInfo>{country.topLevelDomain}</S.CountryInfo>
                  </S.CountryDetail>
                ) : (
                  []
                )}

                {country.currencies ? (
                  <S.CountryDetail>
                    Currencies:{' '}
                    <S.CountryInfo>
                      {country.currencies.map((currency) => currency.code)}
                    </S.CountryInfo>
                  </S.CountryDetail>
                ) : (
                  []
                )}
                {!!country.languages && (
                  <S.CountryDetail>
                    languages:{' '}
                    <S.CountryInfo>
                      {country.languages.map((language, i) => {
                        if (i === country.languages!.length - 1)
                          return language.name
                        return `${language.name}, `
                      })}
                    </S.CountryInfo>
                  </S.CountryDetail>
                )}
              </S.CountryDetailList>
              <S.CountryBordersContainer>
                <S.BordersLabel>Border Countries: </S.BordersLabel>
                {country.borders ? (
                  country.borders.map((borderCountry) => (
                    <Link
                      href={`/${borderCountry}`}
                      key={borderCountry}
                      passHref
                    >
                      <S.BordersBtnContainer>
                        <S.BordersBtn>{borderCountry}</S.BordersBtn>
                      </S.BordersBtnContainer>
                    </Link>
                  ))
                ) : (
                  <p>None - This country is probably on an island</p>
                )}
              </S.CountryBordersContainer>
            </S.CountryInfoContainer>
          </S.CountryDetailsContainer>
          <S.Footer>
            <Link href={'https://github.com/valdenicio22'} passHref>
              <Github width={25} height={25} color={colors.text} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/valdenicioferreira/'}
              passHref
            >
              <Linkedin width={25} height={25} color={colors.text} />
            </Link>
            <Link href={'https://valdenicio22.vercel.app/'} passHref>
              <PersonCircle width={25} height={25} color={colors.text} />
            </Link>
          </S.Footer>
        </>
      ) : (
        <p>Loading</p>
      )}
    </S.Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Array<Country>>(
    'https://restcountries.com/v2/all'
  )
  // getAlpha3CodeAndName(response.data)
  const paths = response.data.map((country) => {
    return {
      params: {
        country: country.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params)
    return {
      props: {}
    }
  const response = await axios.get<Country[]>(
    `https://restcountries.com/v2/name/${ctx.params!.country}`
  )
  const country = updateCountryBorders(response.data[0])
  return {
    props: {
      country: country
    }
  }
}

export default CountryDetails
