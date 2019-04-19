import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';

declare var MODE: string;
declare var ENDPOINT_URL: string;

switch (MODE) {
  case "dev":
  case "beta":
  case "prod":
  default:
    break;
}

ReactDOM.render(
  <App/>,
  document.getElementById('main')
);