export type Country = {
  flags: {
    svg: string
  }
  name: {
    common: string
    nativeName: {
      por: {
        common: string
      }
    }
  }
  cca3: string
  population: string
  region: string
  subregion: string
  capital: string
  languages: {
    por: string
  }
  tld: Array<string>
  border: Array<string>
}
