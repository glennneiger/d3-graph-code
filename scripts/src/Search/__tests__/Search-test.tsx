import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SearchBox from '../SearchBox';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from 'src/store/index';

const TEST_SEARCH_STRING = 'My test search';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;

function setup() {
  enzymeWrapper = mount(<Provider store={store}><SearchBox /></Provider>);
  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('SearchBox', () => {    
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('form').hasClass('search-box')).toBe(true);
      expect(enzymeWrapper.find('Autocomplete').length).toBe(1);
    })

    it('should change strings when changing / selecting', () => {
      const { enzymeWrapper } = setup();
      const input = enzymeWrapper.find('Autocomplete');
      input.props().onChange({target: {value: TEST_SEARCH_STRING}});
      expect(store.getState().search.boxString).toBe(TEST_SEARCH_STRING);
      input.props().onSelect(TEST_SEARCH_STRING + 'x');
      expect(store.getState().search.boxString).toBe(TEST_SEARCH_STRING + 'x');
      enzymeWrapper.unmount();
    })
  })
});