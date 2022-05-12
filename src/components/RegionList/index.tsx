import { Dispatch, useState, SetStateAction } from 'react'

import { ChevronCompactDown } from '@styled-icons/bootstrap'
import * as S from './styles'

export type RegionListProps = {
  setSelectedRegion: Dispatch<SetStateAction<string>>
}

const RegionList = ({ setSelectedRegion }: RegionListProps) => {
  const [toggle, setToggle] = useState(true)
  const [isSelected, setIsSelected] = useState('Filter by Region')

  const handleDisplayOptions = () => {
    setToggle((prev) => (prev === true ? false : true))
  }

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region === 'Filter by Region' ? 'default' : region)
    setIsSelected(region)
    setToggle(true)
  }

  return (
    <S.Wrapper>
      <S.RegionList>
        <S.Region toggle={toggle} onClick={handleDisplayOptions}>
          {isSelected}
          <span>
            <ChevronCompactDown width={20} height={20} />
          </span>
        </S.Region>
        <S.Region
          toggle={toggle}
          onClick={() => handleRegionClick('Filter by Region')}
        >
          Filter by Region
        </S.Region>

        <S.Region
          toggle={toggle}
          value="Africa"
          onClick={() => handleRegionClick('Africa')}
        >
          Africa
        </S.Region>
        <S.Region
          toggle={toggle}
          value="Americas"
          onClick={() => handleRegionClick('Americas')}
        >
          Americas
        </S.Region>
        <S.Region
          toggle={toggle}
          value="Asia"
          onClick={() => handleRegionClick('Asia')}
        >
          Asia
        </S.Region>
        <S.Region
          toggle={toggle}
          value="Europe"
          onClick={() => handleRegionClick('Europe')}
        >
          Europe
        </S.Region>
        <S.Region
          toggle={toggle}
          value="Oceania"
          onClick={() => handleRegionClick('Oceania')}
        >
          Oceania
        </S.Region>
      </S.RegionList>
    </S.Wrapper>
  )
}

export default RegionList
