import fetch from "cross-fetch";
import {retryPromise} from "src/utils";
import { RootState } from "..";
import queryString from "query-string";

declare const ENDPOINT_URL: string;

export const fetchSearchResultStart = () => ({
  type: 'FETCH_SEARCH_RESULT_START',
});

export const fetchSearchResultSuccess = (results: ISearchResultsResponse) => ({
  type: 'FETCH_SEARCH_RESULT_SUCCESS',
  results
});

export function fetchSearchResults() {
  return (dispatch, getState: () => RootState) => {
    dispatch(fetchSearchResultStart());
    const {start, filter, boxString, advancedFilters} = getState().search;
    const {year_start, year_end, medical_specialty} = advancedFilters;
    const device_class = advancedFilters.device_class.join(',');
    const application_type = advancedFilters.application_type.join(',');
    const submission_year = year_start + '-' + year_end;
    let queryObject: any = {
      query: boxString,
      start,
      filter,
      device_class,
      application_type,
      medical_specialty
    };
    if (queryObject.filter === "application") {
      queryObject.submission_year = submission_year;
    }
    const qs = queryString.stringify(queryObject);
    retryPromise(
      () => fetch(`${ENDPOINT_URL}/search?${qs}`).then(data => data.json()),
      (data: ISearchResultsResponse) => {
        for (let hit of data.hits) {
          for (let fieldName in hit.fields) {
            hit.fields[fieldName] = hit.fields[fieldName].join(", ");
          }
        }
        dispatch(fetchSearchResultSuccess(data));
      },
      err => console.log('error.', err),
    );
  }
}

export const changeSearchBoxString = str => ({
  type: 'CHANGE_SEARCH_BOX_STRING',
  str,
});

export const changeStart = (start:number) => ({
  type: 'CHANGE_START',
  start
});

export const changeFilter = (filter:string) => ({
  type: "CHANGE_FILTER",
  filter
})

export const changeAdvancedFilters = (filters: SearchAdvancedFiltersState) => ({
  type: "CHANGE_ADVANCED_FILTERS",
  filters
})