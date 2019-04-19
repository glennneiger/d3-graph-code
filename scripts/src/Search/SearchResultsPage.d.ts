interface ISearchResultsPageTabProps extends SearchState {
  onQueryUpdate: () => void,
  changeStart: (e) => void,
  changeFilter: (e) => void,
  query: string,
  qs_start: number,
  qs_filter: string
}
interface ISearchResultsPageTabState {

}