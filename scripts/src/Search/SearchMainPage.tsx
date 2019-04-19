import React, { Component } from 'react';
import './SearchMainPage.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SearchBox from "./SearchBox";

const SearchMainPage = () => (
  <div>
    <div className="search-bar text-center col-12 col-sm-6 offset-sm-3">
      <img src={require("../img/anora-main-logo-white-text.svg")} alt="Nova Approval Logo" className="img-fluid" />
      <SearchBox autoFocus={false} />
      <div className="mt-4">
        Enter keywords to find info about regulation numbers, product codes, or specific premarket applications.<br />
        Click on the help button in the bottom left of the page to learn more.
      </div>
    </div>
    <div className="text-center col-12 col-sm-6 offset-sm-3">
      <p><b>Some example searches to try:</b></p>
      <SampleSearchLink text="pacemaker medtronic" />
      <SampleSearchLink text="K162550" />
      <SampleSearchLink text="cardiology regulation numbers" />
    </div>
  </div>
);

function SampleSearchLink(props: {text: string}) {
  // return <p>"<Link to={`/results?query=${props.text}&start=0`}>{props.text}</Link>"</p>
  return <p>"{props.text}"</p>;
}

export default SearchMainPage;