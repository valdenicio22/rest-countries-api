import axios from 'axios'
import { GetServerSideProps } from 'next'
import { Country } from 'types/types'
import * as S from './styles'
import { ArrowLeft } from '@styled-icons/bootstrap'
import Router from 'next/router'

type CountryDetailsProps = {
  countryData: Country
}

const CountryDetails = ({ countryData }: CountryDetailsProps) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    borders,
    languages,
    currencies
  } = countryData

  return (
    <S.Wrapper>
      <S.CountryDetailsContainer>
        <S.BackBtn onClick={() => Router.push('/')}>
          <ArrowLeft width={20} height={20} /> Back
        </S.BackBtn>

        <S.ImgContainer>
          <img src={flags.svg} alt={name.common} />
        </S.ImgContainer>

        <S.CountryInfoContainer>
          <S.CountryName>{name.common}</S.CountryName>
          <S.CountryDetailList>
            <S.CountryDetail>
              Native Name:{' '}
              <S.CountryInfo>
                {Object.keys(name.nativeName).map(
                  (native) => name.nativeName[native].common
                )}
              </S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              Population: <S.CountryInfo>{population}</S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              Region: <S.CountryInfo>{region}</S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              Sub Region: <S.CountryInfo>{subregion}</S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              Capital:{' '}
              <S.CountryInfo>{capital.map((city) => city)}</S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail className="extraInfo">
              Top Level Domain:{' '}
              <S.CountryInfo>{tld.map((data) => data)}</S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              Currencies:{' '}
              <S.CountryInfo>
                {Object.keys(currencies).map((currencie) => currencie)}
              </S.CountryInfo>
            </S.CountryDetail>
            <S.CountryDetail>
              languages:{' '}
              <S.CountryInfo>
                {Object.keys(languages).map((language, i) => {
                  if (i === Object.keys(languages).length - 1) return language
                  return `${language}, `
                })}
              </S.CountryInfo>
            </S.CountryDetail>
          </S.CountryDetailList>
          {!!borders && (
            <S.CountryBordersContainer>
              <S.BordersLabel>Border Countries: </S.BordersLabel>
              <S.BordersBtnContainer>
                {borders.map((country) => (
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const response = await axios.get<EventData[]>(
//   //   `https://thiagosgdev.com/events/list`
//   // )
//   // '91708714-1764-4096-81a5-524aa7ad1939'
//   const paths = ['5af2d435-c4a4-4ec7-a8e6-85f05384e1cb'].map((id) => ({
//     params: {
//       id
//     }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const countryName = ctx.params
  const response = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/name/${countryName?.country}`
  )
  return {
    props: {
      countryData: response.data[0]
    }
  }
}

export default CountryDetails
