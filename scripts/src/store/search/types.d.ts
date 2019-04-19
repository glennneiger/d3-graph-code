interface SearchState  {
  boxString: string,
  results: ISearchResultsResponse,
  loading: boolean,
  error: any,
  start: number,
  filter: string,
  advancedFilters: SearchAdvancedFiltersState
}

interface SearchAdvancedFiltersState {
  year_start: number,
  year_end: number,
  application_type: Array<'pma'|'510k'>,
  device_class: Array<'1'|'2'|'3'|'U'|'N'|'f'>,
  medical_specialty: string
}
interface ISearchResultsResponse {
  hits: ISearchResult[],
  start: number,
  found: number
}

interface ISearchResult {
  id: string,
  fields: {
    type: string,
    primary: string,
    secondary: string,
    title: string,
    device_class: string,
    regulation_number: string,
    medical_specialty: string
  }
}
