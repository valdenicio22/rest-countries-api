import { Dispatch, useState, SetStateAction } from 'react'

import { ChevronCompactDown } from '@styled-icons/bootstrap'
import * as S from './styles'

export type RegionListProps = {
  setSelectedRegion: Dispatch<SetStateAction<string>>
  selectedRegion: string
}

const RegionList = ({ setSelectedRegion, selectedRegion }: RegionListProps) => {
  const [toggle, setToggle] = useState(true)

  const handleDisplayOptions = () => {
    setToggle((prev) => (prev === true ? false : true))
  }

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region)
    setToggle(true)
  }

  return (
    <S.Wrapper>
      <S.RegionList>
        <S.Region toggle={toggle} onClick={handleDisplayOptions}>
          {selectedRegion ? selectedRegion : 'Filter by Region'}
          <span>
            <ChevronCompactDown width={20} height={20} />
          </span>
        </S.Region>
        {selectedRegion !== 'Filter by Region' && selectedRegion !== '' && (
          <S.Region
            toggle={toggle}
            onClick={() => handleRegionClick('Filter by Region')}
          >
            Filter by Region
          </S.Region>
        )}
        {selectedRegion !== 'Africa' && (
          <S.Region
            toggle={toggle}
            value="Africa"
            onClick={() => handleRegionClick('Africa')}
          >
            Africa
          </S.Region>
        )}
        {selectedRegion !== 'Americas' && (
          <S.Region
            toggle={toggle}
            value="Americas"
            onClick={() => handleRegionClick('Americas')}
          >
            Americas
          </S.Region>
        )}
        {selectedRegion !== 'Asia' && (
          <S.Region
            toggle={toggle}
            value="Asia"
            onClick={() => handleRegionClick('Asia')}
          >
            Asia
          </S.Region>
        )}
        {selectedRegion !== 'Europe' && (
          <S.Region
            toggle={toggle}
            value="Europe"
            onClick={() => handleRegionClick('Europe')}
          >
            Europe
          </S.Region>
        )}
        {selectedRegion !== 'Oceania' && (
          <S.Region
            toggle={toggle}
            value="Oceania"
            onClick={() => handleRegionClick('Oceania')}
          >
            Oceania
          </S.Region>
        )}
      </S.RegionList>
    </S.Wrapper>
  )
}

export default RegionList
