import React from 'react';
import SearchResultsPage from '../SearchResultsPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from 'src/store/index';
import renderer from 'react-test-renderer';
import history from "src/history";
import ConnectedRouter from 'react-router-redux/ConnectedRouter';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <SearchResultsPage />  
        </ConnectedRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});