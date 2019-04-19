import { combineReducers, Reducer, createStore, applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux';
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux';
import GoogleAnalyticsGtag, {trackPageView, trackEvent} from '@redux-beacon/google-analytics-gtag';
import { createMiddleware } from 'redux-beacon';
import { LOCATION_CHANGE } from 'react-router-redux';
import history from "../history";

import searchReducer from './search/reducer';
import detailsReducer from './details/reducer';
import authReducer from './auth/reducer';
import queryString from "query-string";

interface queryString {source?: string};
const qs: queryString = queryString.parse(window.location.search);
const source: string = qs.source || '';
declare const MODE: string;

// The top-level state object
export interface RootState {
  router: any;
  search: SearchState;
  details: DetailsState;
  auth: AuthState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<RootState> = combineReducers<RootState>({
  router: routerReducer,
  search: searchReducer,
  details: detailsReducer,
  auth: authReducer,
});


Raven.config(
  'https://103bbe3a50b941daaea4a78e3f2636c7@sentry.io/1221973',
  {
    environment: MODE,
    tags: { source },
  }
).install();

const trackingId = 'UA-120451892-1';
let ga = (events: any[]) => {};
if (MODE !== 'test') {
  ga =  GoogleAnalyticsGtag(trackingId);
}

const envParams = JSON.stringify({
  env: MODE,
  source,
});
​
const eventsMap = {
  // [LOCATION_CHANGE]: trackPageView(action => ({
  //   page: action.payload.pathname
  // }))
  [LOCATION_CHANGE]: trackPageView((action, prevState, nextState) => {
    return {
      title: action.payload.pathname + action.payload.search + envParams,
      location: "loc",
      path: action.payload.pathname,
    };
  }),
  'FETCH_SEARCH_RESULT_START': trackEvent((action, prevState, nextState) => ({
    category: envParams,
    action: action.type,
    label: nextState.search.boxString,
  })),
  'SELECT_DETAIL_TAB': trackEvent((action, prevState, nextState) => ({
    category: envParams,
    action: action.type,
    label: action.tabLabel,
  })),
  '*': trackEvent(action => ({
    category: envParams,
    label: 'Redux Event',
    action: action.type,
  }))
};

const gaMiddleware = createMiddleware(eventsMap, ga);
// const gaMetaReducer = createMetaReducer(eventsMap, ga);

const rMiddleware = routerMiddleware(history);
const ravenMiddleware = createRavenMiddleware(Raven, {});

export default createStore(
  reducers,
  applyMiddleware(thunkMiddleware, rMiddleware, gaMiddleware, ravenMiddleware),
);