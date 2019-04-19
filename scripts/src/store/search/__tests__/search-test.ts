import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from "../actions"
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
​
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
​
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
​
  it('runs actions when searching for sample results', () => {
    let data = {hits: [{"id": "123", "fields": {"primary": "primary", "secondary": "secondary", "regulation_number": "r", "medical_specialty": "123", "device_class": "2", "title": "Abc", "type": "nova_search_fda_510k"}}], start: 0, found: 100};
    fetchMock
      .getOnce('/todos', { body: data, headers: { 'content-type': 'application/json' } })
​
    const expectedActions = [
      { type: "FETCH_SEARCH_RESULT_START" },
      { type: "FETCH_SEARCH_RESULT_SUCCESS", body: data }
    ]
    const store = mockStore({ 
      search: {
        boxString: "abc", 
        start: 10, 
        advancedFilters: {
          year_start: 1980,
          year_end: 2018,
          application_type: [],
          device_class: [],
          medical_specialty: "",
        },
      } 
    });
​
    // return store.dispatch(actions.fetchSearchResults()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  })
})