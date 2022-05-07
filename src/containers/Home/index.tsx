import * as S from './styles'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'
import { Country } from 'types/types'
import CountryCard from 'components/CountryCard'
import Link from 'next/link'

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    api
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
  }, [])

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField />
        <Select />
      </S.FiltersContainer>
      <S.CountryCardList>
        {countries.map((country) => (
          <Link
            href={`/${country.region}/${country.name.common}`}
            key={country.cca3}
          >
            <a>
              <CountryCard country={country} />
            </a>
          </Link>
        ))}
      </S.CountryCardList>
    </S.Wrapper>
  )
}

export default Home
