import * as S from './styles'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import { api } from '../../service/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { Country } from 'types/types'
import CountryCard from 'components/CountryCard'
import Link from 'next/link'
import { useDebounce } from '../../hooks/useDebounce'
import { GetStaticProps } from 'next'
import axios from 'axios'

type HomeProps = {
  countriesData: Array<Country>
}

const Home = ({ countriesData }: HomeProps) => {
  const [countries, setCountries] = useState<Country[]>(countriesData)
  const [inputSearch, setInputSearch] = useState('')
  const [debounceData, setDebounceData] = useState('')
  const [selectData, setSelectData] = useState('default')
  const debouncedInputSearch = useDebounce(setDebounceData, 500)

  useEffect(() => {
    let query
    if (debounceData) {
      setSelectData('default')
      query = `/name/${debounceData}`
    } else {
      setCountries(countriesData)
      return
    }
    api.get(query).then((response) => setCountries(response.data))
  }, [debounceData, countriesData])

  useEffect(() => {
    if (selectData === 'default' && !debounceData) {
      setCountries(countriesData)
      return
    }
    if (!selectData || selectData === 'default') return

    api
      .get(`/region/${selectData}`)
      .then((response) => setCountries(response.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectData])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
    debouncedInputSearch(e.target.value)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectData(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField value={inputSearch} onChange={handleInputChange} />
        <Select onChange={handleSelectChange} selectData={selectData} />
      </S.FiltersContainer>
      <S.CountryCardList>
        {!!countries &&
          countries.map((country) => (
            <Link
              href={`/${country.name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')}`}
              key={country.alpha3Code}
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<Array<Country>>(
    'https://restcountries.com/v2/all'
  )
  return {
    props: {
      countriesData: response.data
    }
  }
}

export default Home
