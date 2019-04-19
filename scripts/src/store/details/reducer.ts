/// <reference path="./types.d.ts" />
import { Reducer } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState: DetailsState = {
  result: {},
  loading: true,
  error: null,
  detail_header: null,
};

const details: Reducer<DetailsState> = (state: DetailsState = initialState, action): DetailsState => {
  switch (action.type) {
    case 'FETCH_DETAIL_START':
      return {
        ...state,
        result: {},
        error: null,
        loading: true,
      };
    case 'FETCH_DETAIL_SUCCESS':
      return {
        ...state,
        result: action.result,
        error: null,
        loading: false,
        detail_header: action.detail_header
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default details;