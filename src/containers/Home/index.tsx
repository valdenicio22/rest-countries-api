import * as S from './styles'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'
import { Country } from 'types/types'

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    api
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
  }, [])

  console.log(countries)

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField />
        <Select />
      </S.FiltersContainer>
    </S.Wrapper>
  )
}

export default Home
