export type Country = {
  flags?: {
    svg: string
  }
  name: string
  nativeName?: string

  alpha3Code?: string
  population?: number
  region?: string
  subregion?: string
  area?: number
  capital?: Array<string>
  languages?: Array<{ name: string }>
  topLevelDomain?: Array<string>
  borders?: Array<string>
  currencies?: Array<{ code: string }>
}
