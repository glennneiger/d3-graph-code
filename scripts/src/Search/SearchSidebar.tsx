import React from 'react';
import { connect } from 'react-redux';
import Pagination from "./Pagination";
import Survey from '../Survey/Survey';
import SearchFilters from './SearchFilters';
import "./SearchSidebar.scss";
const mapStateToProps = state => ({
  ...state.search,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

function ListGroupItem(props: { title: string, children: any, noaction?: boolean}) {
  return (<div className="list-group-item flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <div className="mb-1 group-title">{props.title}</div>
      <small></small>
    </div>
    <div className="mb-1">
      {props.children}
    </div>
    <small></small>
  </div>);
}


function SearchSidebar(props: SearchState) {
  return (
    <div className="list-group">
      <SearchFilters />
      {props.results && <ListGroupItem title={`${props.results.found} results found`}>
        <Pagination />
      </ListGroupItem>}
      {/* <ListGroupItem title="About Us">
        <div>
          These results reflect regulatory concepts available through the FDA website and the <a target="_blank" href="https://open.fda.gov/">OpenFDA API</a>.
        </div>
      </ListGroupItem>
      <ListGroupItem title="Give Feedback">
        <div>
          We would love your feedback on our site so far.<br />
          Please contact us at <a href="mailto:feedback@anora.ai">feedback@anora.ai </a> 
          for any inquiries or feedback you may have, or submit feedback directly through our form below. Thank you!<br /><br />
          Some examples of helpful feedback:<br />
          <ul>
            <li>When I search X I should be seeing Y, but I can't find it.</li>
            <li>I would love to see a visualization of X, that would be really helpful</li>
            <li>Would it be possible to show data from X database?</li>
            <li>You guys are the best.</li>
          </ul>
        </div>
        <Survey />
      </ListGroupItem> */}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSidebar);
