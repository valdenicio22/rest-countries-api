import * as S from './styles'
import TextField from '../../components/TextField'
import { api } from '../../service/api'
import { ChangeEvent, useEffect, useState } from 'react'
import { Country } from 'types/types'
import CountryCard from 'components/CountryCard'
import Link from 'next/link'
import { useDebounce } from '../../hooks/useDebounce'
import { GetStaticProps } from 'next'
import axios from 'axios'
import RegionList from 'components/RegionList'
import { useInView } from 'react-intersection-observer'

type HomeProps = {
  countriesData: Array<Country>
}

const Home = ({ countriesData }: HomeProps) => {
  const pagesStep = 8
  const [countries, setCountries] = useState<Country[]>(
    countriesData.slice(0, pagesStep)
  )
  const [inputSearch, setInputSearch] = useState('')
  const [debounceData, setDebounceData] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const debouncedInputSearch = useDebounce(setDebounceData, 500)
  const [myRef, inView] = useInView({
    threshold: 1
  })
  const [currentPage, setCurrentPage] = useState(pagesStep)

  useEffect(() => {
    if (!debounceData) return
    let query = ''
    if (debounceData) {
      setSelectedRegion('Filter by Region')
      query = `/name/${debounceData}`
    } else {
      setCountries(countriesData.slice(0, currentPage))
      return
    }
    api.get(query).then((response) => setCountries(response.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceData])

  useEffect(() => {
    if (!selectedRegion) return
    if (selectedRegion === 'Filter by Region') {
      setCountries(countriesData.slice(0, currentPage))
      return
    }

    api
      .get(`region/${selectedRegion}`)
      .then((response) => setCountries(response.data))
    setInputSearch('')
    setDebounceData('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
    debouncedInputSearch(e.target.value)
  }

  useEffect(() => {
    if (!inView) return

    setCurrentPage((prev) => prev + pagesStep)
    setCountries(countriesData.slice(0, currentPage + pagesStep))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField value={inputSearch} onChange={handleInputChange} />
        <RegionList
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
      </S.FiltersContainer>
      <S.CountryCardList>
        {!!countries &&
          countries.map((country) => (
            <Link
              href={`/${country.name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')}`}
              key={country.name}
            >
              <a>
                <CountryCard country={country} />
              </a>
            </Link>
          ))}
        <div ref={myRef} id="loadMore" />
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
