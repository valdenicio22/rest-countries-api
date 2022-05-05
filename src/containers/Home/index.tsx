import * as S from './styles'
import TextField from '../../components/TextField'
import Select from '../../components/Select'

const Home = () => {
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
