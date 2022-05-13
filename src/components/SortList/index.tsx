import { Dispatch, useState, SetStateAction } from 'react'

import { ChevronCompactDown } from '@styled-icons/bootstrap'
import * as S from './styles'
import { Country } from 'types/types'

export type SortListProps = {
  setCountries: Dispatch<SetStateAction<Country[]>>
  setSelectedSort: Dispatch<SetStateAction<string>>
  countriesData: Array<Country>
  selectedSort: string
}

type Field = 'area' | 'population' | 'name'
const SortList = ({
  countriesData,
  setCountries,
  setSelectedSort,
  selectedSort
}: SortListProps) => {
  const [toggle, setToggle] = useState(true)

  const handleDisplayOptions = () => {
    setToggle((prev) => (prev === true ? false : true))
  }

  const ascOrdering = (a: Country, b: Country) => {
    if (a.name.toLowerCase().localeCompare(b.name.toLowerCase())) return 1
    if (b.name.toLowerCase().localeCompare(a.name.toLowerCase())) return -1
    return 0
  }

  const descOrdering = (a: Country, b: Country, field: Field) => {
    if (a[field]! < b[field]!) return 1
    if (a[field]! > b[field]!) return -1
    return 0
  }

  const handleSortListClick = (sortItem: string) => {
    setSelectedSort(sortItem)
    setToggle(true)
    const field = sortItem.slice(11, sortItem.length).toLowerCase()
    let sortedCountries = [...countriesData]

    switch (field) {
      case 'area':
      case 'population':
        console.log('field', field)
        sortedCountries = sortedCountries
          .filter((country) => !!country[field] && country)
          .sort((a, b) => descOrdering(a, b, field))
        break
      case 'name':
        sortedCountries = sortedCountries
          .filter((country) => !!country[field] && country)
          .sort((a, b) => ascOrdering(a, b))
        break
      default:
        break
    }

    setCountries(sortedCountries)
  }

  return (
    <S.Wrapper>
      <S.SortList>
        <S.SortItem toggle={toggle} onClick={handleDisplayOptions}>
          {selectedSort ? selectedSort : 'Sorting by Name'}
          <span>
            <ChevronCompactDown width={20} height={20} />
          </span>
        </S.SortItem>
        {selectedSort !== 'Sorting by Name' && selectedSort !== '' && (
          <S.SortItem
            toggle={toggle}
            onClick={() => handleSortListClick('Sorting by Name')}
          >
            Sort by Name
          </S.SortItem>
        )}
        {selectedSort !== 'Sorting by Area' && (
          <S.SortItem
            toggle={toggle}
            onClick={() => handleSortListClick('Sorting by Area')}
          >
            Sort by Area
          </S.SortItem>
        )}
        {selectedSort !== 'Sorting by Population' && (
          <S.SortItem
            toggle={toggle}
            onClick={() => handleSortListClick('Sorting by Population')}
          >
            Sort by Population
          </S.SortItem>
        )}
      </S.SortList>
    </S.Wrapper>
  )
}

export default SortList
