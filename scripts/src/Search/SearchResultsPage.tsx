import React from "react";
// import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import { connect } from "react-redux";
import SearchResultsPageTab from "./SearchResultsPageTab";
import SearchSidebar from "./SearchSidebar";
import { Link } from "react-router-dom";
import queryString from "query-string";
import "./SearchResultsPage.scss";
import { login } from "../store/auth/actions";
import Wizard from '../Wizard/Wizard';
import { Button } from 'react-bootstrap';

interface SaveUpdateQueryBtnProps {
  text: string,
  onClick: () => void,
  icon?: string
}

const SaveUpdateQueryBtn = (props: SaveUpdateQueryBtnProps) => 
  <Button onClick={props.onClick} className='save-update-query-btn'>
    <i className={props.icon} /> {props.text}
  </Button>

const mapStateToProps = state => ({
  ...state.auth,
  ...state.search,
  qs_filter: queryString.parse(state.router.location.search).filter || "",
  query: queryString.parse(state.router.location.search).query,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: () => dispatch(login()),
  onSaveUpdateQuery: () => console.log('save_update_clicked')
});

interface ISearchResultsPageProps extends SearchState {
  qs_filter: string;
  loggedIn: boolean;
  login: () => void;
  query: string;
  onSaveUpdateQuery: () => void
}

function SearchResultsPage(props: ISearchResultsPageProps) {
  return (
    <div>
      <div className="row" />
      <div className="row">
        <div className='search-result-info-container'>
          <div className='search-result-for'>
            Search results for: <b>{props.query}</b>
          </div>
          <div>
            <SaveUpdateQueryBtn
              text='Save Query'
              icon='fa fa-search-plus'
              onClick={props.onSaveUpdateQuery}
            />
          </div>
        </div>
        <Wizard />
        <div className="nova-result-container">
          <div className="col-sm-3 col-md-3 nova-search-sidebar-container">
            <SearchSidebar />
          </div>
          <div className='col-sm-9 col-md-9'>
            {/* TODO: ENABLE LATER */}
            {true ? null : (
              <div
                className="nova-logged-out-blur"
                role="button"
                onClick={props.login}
              >
                <p className="nova-logged-out-blur-text">
                  Please login or sign up for an account to see the results.
                  <br />
                  By logging in, you will help us improve our service!
                  <button
                    className="btn btn-outline-primary btn-lg mt-4"
                    style={{ display: "block", margin: "auto" }}
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
            <SearchResultsPageTab />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPage);
