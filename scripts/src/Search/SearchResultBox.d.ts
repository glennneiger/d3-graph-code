export interface ISearchResultsBoxProps extends ISearchResultsBoxState{
  loadMore?: () => void,
  renderItem: any,
  resultCount?: number,
  boxName: string,
  data: ISearchResult[],
}
export interface ISearchResultsBoxState {

}