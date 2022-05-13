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
import SortList from 'components/SortList'

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
  const [selectedSort, setSelectedSort] = useState('')
  const debouncedInputSearch = useDebounce(setDebounceData, 500)
  const [myRef, inView] = useInView({
    threshold: 1
  })
  const [currentPage, setCurrentPage] = useState(pagesStep)

  useEffect(() => {
    if (!debounceData && !selectedRegion && !selectedSort) {
      setCountries(countriesData.slice(0, currentPage))
      return
    }
    if (!debounceData) return
    setSelectedRegion('')
    setSelectedSort('')
    api
      .get(`/name/${debounceData}`)
      .then((response) => setCountries(response.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceData])

  useEffect(() => {
    console.log('selected sort useEffect')
    if (!selectedSort) return
    setInputSearch('')
    setDebounceData('')
    setSelectedRegion('')
  }, [selectedSort])

  useEffect(() => {
    console.log('selected Region useEffect')
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
    setSelectedSort('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion])

  useEffect(() => {
    if (!inView) return
    if (debounceData || selectedRegion || selectedSort) return

    setCurrentPage((prev) => prev + pagesStep)
    setCountries(countriesData.slice(0, currentPage + pagesStep))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
    debouncedInputSearch(e.target.value)
  }

  console.log({ debounceData })
  console.log({ selectedRegion })
  console.log({ selectedSort })
  console.log({ countries })

  return (
    <S.Wrapper>
      <S.FiltersContainer>
        <TextField value={inputSearch} onChange={handleInputChange} />
        <S.Filters>
          <SortList
            countriesData={countriesData}
            setCountries={setCountries}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
          <RegionList
            setSelectedRegion={setSelectedRegion}
            selectedRegion={selectedRegion}
          />
        </S.Filters>
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
