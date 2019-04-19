/// <reference path="./SearchResultsPage.d.ts" />
import React, { Component } from 'react';
import "./SearchResultsPageTab.scss";
import { connect } from 'react-redux';
import { fetchSearchResults, changeStart, changeFilter } from '../store/search/actions'
import { Link } from 'react-router-dom';
import queryString from "query-string";

import Loading from "../Loading/Loading";
import TextView from "../Details/TextView/TextView";
import SearchBoxInfo from "../Details/SearchBoxInfo/SearchBoxInfo";

import SearchResultBox from './SearchResultBox';
import Pagination from "./Pagination";

const mapStateToProps = state => ({
    ...state.search,
    query: queryString.parse(state.router.location.search).query,
    qs_start: parseInt(queryString.parse(state.router.location.search).start || 0),
    qs_filter: queryString.parse(state.router.location.search).filter || ""
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onQueryUpdate: () => dispatch(fetchSearchResults()),
    changeStart: (i) => dispatch(changeStart(i)),
    changeFilter: (i) => dispatch(changeFilter(i))
});

const DB_TYPES = {
  "product_code": {"title": "Product Code", "slug": "product_code", "component": ProductCode},
  "510k": {"title": "510(k)", "slug": "510k", "component": Five10K},
  "pma": {"title": "PMA", "slug": "pma", "component": PMA},
  "regulation_number": {"title": "Regulation Number", "slug": "regulation_number", "component": RegulationNumber}
}



class SearchResultsPageTab extends Component<ISearchResultsPageTabProps, ISearchResultsPageTabState> {
  
  componentDidMount() {
    changeStart(this.props.start);
    this.props.changeFilter(this.props.qs_filter);
    this.props.onQueryUpdate();
    // console.log("moutned");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query ||
      prevProps.start !== this.props.qs_start ||
      prevProps.filter !== this.props.qs_filter) {
      this.props.changeStart(this.props.qs_start);
      this.props.changeFilter(this.props.qs_filter);
      // console.log(prevProps, this.props);
      this.props.onQueryUpdate();
    }
  }

  onSaveUpdateQuery() {

  }

  render() {
    if (!this.props.loading && !this.props.results.hits.length) {
      return <div className="mt-4">No results found.</div>;
    }
    const prod_code_items = [];
    const five10k_items = [];
    const pma_items = [];
    const regulation_number_items = [];
    {this.props.results && this.props.results.hits.map(result => {
      switch(result.fields.type) {
        case("product_code"):
          prod_code_items.push(result);
          break;
        case("510k"):
          five10k_items.push(result);
          break;
        case("pma"):
          pma_items.push(result);
          break;
        case("regulation_number"):
          regulation_number_items.push(result);
          break;
        default:
          break;
      }
    })}
    return (
      <div className="row">
        {this.props.loading && <Loading />}
        {this.props.results && this.props.results.hits && <div className="search-results">
        <SearchResultBox
          data={regulation_number_items}
          renderItem={RegulationNumber}
          boxName="Regulation Number"
        />
        <SearchResultBox
          data={prod_code_items}
          renderItem={ProductCode}
          boxName="Product Codes"
        />
        <SearchResultBox
          data={five10k_items}
          renderItem={Five10K}
          boxName="510k Applications"
        />
        <SearchResultBox
          data={pma_items}
          renderItem={PMA}
          boxName="PMA Applications"
        />
        <Pagination />
        </div>}
      </div>
    );
  }
}

function ProductCode({result}) {
  const info = [
    {
      key: 'Classification',
      value: `Class ${result.fields.device_class}`,
    },
    {
      key: 'Regulation Medical Specialty',
      value: result.fields.medical_specialty,
    },
    {
      key: 'Regulation Review Panel',
      value: result.fields.primary,
    },
    {
      key: '510(K) Applications',
      value: null,
    },
    {
      key: 'PMA Applications',
      value: null,
    },
  ]
  return (<div key={result.id} className="one-result-pc">
  <div className="one-result-pc-header">
      <Link to={`/results/product_code/${result.fields.primary}`}>
        <span className="one-result-pc-number">{result.fields.regulation_number}</span>
        <span className="one-result-pc-arrow">⟩</span>
        <span className="one-result-pc-name">{result.fields.title}</span>
      </Link>
  </div>
  <SearchBoxInfo data={info} />
</div>);
}

function Five10K({result}) {
  const info = [
    {
      key: 'Estimated Cost',
      value: `$46,000.00`,
    },
    {
      key: 'Review Time',
      value: '56 Days',
    },
    {
      key: 'Decision Date',
      value: new Date(Date.parse(result.fields.date_received)).toLocaleDateString(),
    },
    {
      key: 'Classification',
      value: `Class ${result.fields.device_class}`,
    },
    {
      key: 'Advisory Committee',
      value: result.fields.medical_specialty_description,
    },
    {
      key: 'Clearance Type',
      value: null,
    },
  ]
  return (<div key={result.id} className="one-result-510k">
  <div className="one-result-510k-header">
    <div>
      <Link to={`/results/510k/${result.fields.primary}`}>
        <span className="one-result-510k-text">{result.fields.regulation_number}</span>
        <span className="one-result-510k-arrow">⟩</span>
        <span className="one-result-510k-text">{`${result.fields.product_code} ${result.fields.title}`}</span>
      </Link>
      <Link to={`/results/510k/${result.fields.primary}`}>
        <div className="one-result-510k-subHeader">{`${result.fields.primary} ${result.fields.title}`}</div>
      </Link>
    </div>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Medtronic_logo.svg/1280px-Medtronic_logo.svg.png" className="one-result-510k-header-companyLogo" />
  </div>
  <SearchBoxInfo data={info} />
  </div>);
}

function PMA({result}) {
  const info = [
    {
      key: 'Estimated Cost',
      value: `$46,000.00`,
    },
    {
      key: 'Review Time',
      value: '56 Days',
    },
    {
      key: 'Decision Date',
      value: new Date(Date.parse(result.fields.date_received)).toLocaleDateString(),
    },
    {
      key: 'Classification',
      value: `Class ${result.fields.device_class}`,
    },
    {
      key: 'Advisory Committee',
      value: result.fields.medical_specialty_description,
    },
    {
      key: 'Clearance Type',
      value: null,
    },
  ]
  return (<div key={result.id} className="one-result-pma">
  <div className="one-result-pma-header">
      <div>
        <Link to={`/results/pma/${result.fields.primary}`}>
          <span className="one-result-pma-text">{result.fields.regulation_number}</span>
          <span className="one-result-pma-arrow">⟩</span>
          <span className="one-result-pma-text">{`${result.fields.product_code} ${result.fields.title}`}</span>
        </Link>
        <Link to={`/results/pma/${result.fields.primary}`}>
          <div className="one-result-pma-subHeader">{`${result.fields.primary} ${result.fields.title}`}</div>
        </Link>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Medtronic_logo.svg/1280px-Medtronic_logo.svg.png" className="one-result-pma-header-companyLogo" />
  </div>
  <SearchBoxInfo data={info} />
  </div>);
}

function RegulationNumber({result}) {
  return (<div key={result.id} className="one-result-rn">
  <span>
      <Link to={`/results/regulation_number/${result.fields.primary}`}>
        <span className="one-result-rn-header">{result.fields.regulation_number} {result.fields.title}</span>
      </Link>
  </span>
  <div className="one-result-rn-description">
    A pacemaker repair or replacement material is an adhesive, a sealant, a screw, a crimp, or any other material used to repair a pacemaker lead or to reconnect a pacemaker lead to a pacemaker pulse generator.
  </div>
</div>);
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPageTab);
