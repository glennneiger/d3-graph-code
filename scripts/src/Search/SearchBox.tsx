import React, { Component } from 'react';
import './SearchBox.scss';
import Autocomplete from "react-autocomplete";
import { changeSearchBoxString } from '../store/search/actions'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import fetch from "cross-fetch";
import queryString from "query-string";
declare var ENDPOINT_URL: any;

const mapStateToProps = state => ({
  ...state.search,
  query: state.search.boxString
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (val) => {
      dispatch(changeSearchBoxString(val));
    },
    onSearch: (val) => {
      dispatch(changeSearchBoxString(val));
      dispatch(push(`/results?query=${val}&start=${ownProps.start || 0}`));
    }
  }
};

class SearchBox extends Component<any, any> {
  constructor(props) {
    super(props);
    // Suggests can be local as nowhere else will need this
    this.state = {
      suggestions: []
    }
  }
  
  onChange(value) {
    this.props.onChange(value);
    fetch(`${ENDPOINT_URL}/suggest?query=${value}`).then(data => data.json())
      .then(data => {
        this.setState({ suggestions: data.suggestions || [] });
      });
  }
  render() {
    return (
    <div>
      {this.props.landing ? (<form className="search-box" onSubmit={(e) => {e.preventDefault(); this.props.onSearch(this.props.query)}}>
      <Autocomplete
        getItemValue={(item) => item.suggestion}
        items={this.state.suggestions}
        renderItem={(item, isHighlighted) =>
          <div key={item.id} className="dropdown-item hidden-sm">
            {item.suggestion}
          </div>
        }
        renderInput={(props) =>
            <div className="input-group">
              <input 
                autoFocus={this.props.autoFocus} 
                type="text" 
                className="form-control nova-input-search" 
                aria-label="Large" 
                aria-expanded="false"
                aria-describedby="inputGroup-sizing-sm" 
                placeholder="Search by keyword, regulation number, product code, or application..."
                {...props} 
              />
              <div className="input-group-append">
                <button className="btn" type="submit"><i className="fas fa-search fa-2x text-white"></i></button>
              </div>
            </div>
        }
        wrapperStyle={{}}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 0',
          position: 'fixed',
          overflow: 'hidden',
          maxHeight: '50%',
          zIndex: 1,
        }}
        value={this.props.query}
        onChange={(e) => this.onChange(e.target.value)}
        onSelect={this.props.onSearch}
        autoHighlight={false}
      />
      {/* <h2 className="mt-4 anora-text-white">Coming soon.</h2> */}
      </form>) : (
      <form className="search-box-1" onSubmit={(e) => {e.preventDefault(); this.props.onSearch(this.props.query)}}>
        <Autocomplete
          getItemValue={(item) => item.suggestion}
          items={this.state.suggestions}
          renderItem={(item, isHighlighted) =>
            <div key={item.id} className="dropdown-item hidden-sm">
              {item.suggestion}
            </div>
          }
          renderInput={(props) =>
              <div className="input-group">
                <span className="input-group-prepend">
                  <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                </span>
                <input 
                  autoFocus={this.props.autoFocus} 
                  style={{borderRadius: "0px 22.25px 22.25px 0px"}}
                  type="text" 
                  className="form-control nova-input-search-2" 
                  aria-label="Small" 
                  aria-describedby="inputGroup-sizing-sm" 
                  placeholder="Search by keyword, regulation number, product code, or application..."
                  {...props} 
                />
              </div>
          }
          wrapperStyle={{}}
          menuStyle={{
            borderRadius: '3px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            position: 'fixed',
            overflow: 'hidden',
            maxHeight: '50%',
            zIndex: 1,
          }}
          value={this.props.query}
          onChange={(e) => this.onChange(e.target.value)}
          onSelect={this.props.onSearch}
          autoHighlight={false}
        />
      </form>)}
    </div>
    );
  }
}

const SearchBoxContainer = connect(
  mapStateToProps, 
  mapDispatchToProps,
)(SearchBox);

export default SearchBoxContainer;