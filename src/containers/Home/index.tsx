import * as S from './styles'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import { api } from '../../service/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { Country } from 'types/types'
import CountryCard from 'components/CountryCard'
import Link from 'next/link'
import { useDebounce } from '../../hooks/useDebounce'

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [inputSearch, setInputSearch] = useState('')
  const [debounceData, setDebounceData] = useState('')
  const [selectData, setSelectData] = useState('default')
  const debouncedInputSearch = useDebounce(setDebounceData, 500)

  useEffect(() => {
    let query
    if (debounceData) {
      setSelectData('default')
      query = `/name/${debounceData}`
    } else query = '/all'
    api.get(query).then((response) => setCountries(response.data))
  }, [debounceData])

  useEffect(() => {
    if (!selectData) return
    api
      .get(`/region/${selectData}`)
      .then((response) => setCountries(response.data))
  }, [selectData])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
    debouncedInputSearch(e.target.value)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectData(e.target.value)
  }

  console.log({ selectData })

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField value={inputSearch} onChange={handleInputChange} />
        <Select onChange={handleSelectChange} selectData={selectData} />
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
