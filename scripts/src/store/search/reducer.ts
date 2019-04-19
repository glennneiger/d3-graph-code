/// <reference path="./types.d.ts" />
import queryString from "query-string";
import { Reducer } from 'redux';

interface queryString {query?: string, start?: string};
const qs: queryString = queryString.parse(window.location.search);

export const initialState: SearchState = {
  boxString: qs.query || '',
  results: null,
  loading: true,
  error: null,
  start: parseInt(qs.start) || 0,
  filter: "",
  advancedFilters: {
    year_start: 1980,
    year_end: 2018,
    application_type: [],
    device_class: [],
    medical_specialty: "",
  }
};


const search: Reducer<SearchState> = (state: SearchState = initialState, action): SearchState => {
  switch (action.type) {
    case 'CHANGE_SEARCH_BOX_STRING':
      return {
        ...state,
        boxString: action.str,
      };
    case 'CHANGE_START':
      return {
        ...state,
        start: action.start,
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'CHANGE_ADVANCED_FILTERS':
      return {
        ...state,
        advancedFilters: action.filters,
      };
    case 'FETCH_SEARCH_RESULT_START':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'FETCH_SEARCH_RESULT_SUCCESS':
      return {
        ...state,
        results: action.results,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default search;