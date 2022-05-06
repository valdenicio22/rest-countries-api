export type Country = {
  flags: {
    svg: string
  }
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
      }
    }
  }
  cca3: string
  population: string
  region: string
  subregion: string
  capital: Array<string>
  languages: { [key: string]: string }
  tld: Array<string>
  borders?: Array<string>
  currencies: {
    [key: string]: Record<string, string>
  }
}
