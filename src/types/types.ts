export type Country = {
  flags?: {
    svg: string
  }
  name: string
  nativeName?: string

  alpha3Code?: string
  population?: string
  region?: string
  subregion?: string
  capital?: Array<string>
  languages?: [
    {
      name: string
    }
  ]
  topLevelDomain?: Array<string>
  borders?: Array<string>
  currencies?: [
    {
      code: string
    }
  ]
}
