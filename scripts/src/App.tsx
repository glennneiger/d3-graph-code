import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import './Responsive.scss';
import Landing from "./Landing/Landing";
import SearchResultsPage from "./Search/SearchResultsPage";
import ProductCodePage from "./Details/ProductCodePage/ProductCodePage";
import PMAPage from "./Details/PMAPage/PMAPage";
import Five10KPage from "./Details/Five10KPage/Five10KPage";
import RegnumPage from "./Details/RegulationNumberPage/RegnumPage";
import Header from "./Header/Header";
import AuthPage from "./Accounts/AuthPage";
import AccountHeader from "./Accounts/AccountHeader";
import {
  BrowserRouter as Router,
  Route,
  NavLink, Switch, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import history from "./history";
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import Favicon from 'react-favicon';
import ErrorBoundary from './ErrorBoundary';
import store from './store';
import HelpModal from "./Help";
import Helmet from 'react-helmet';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import ProfileOverview from './profile-overview/profile-overview';
// import MainLayout from './ResultsSearch/mainLayout';

class App extends React.Component {
  _helpModal: any = null; 
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="container-fluid App">
            <Helmet>
              <title>Anora: Your Intelligent FDA Advisor</title>
              <link rel="icon" href={require("./img/anora-logogram@5x.png")} type="image/x-icon" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            {/* <Route path="/help" render={() => <HelpModal />} /> */}
            <ErrorBoundary>
              <Switch>
                <Route path={'/'} exact />
                <Route component={Header} />
              </Switch>
              <Switch>
                <Route path={'/'} exact component={Landing} />
                <Route path={'/auth'} exact component={AuthPage} />
                {/* <Route path={'/'} component={Landing} /> */}
                <Route path={'/results/product_code/:product_code'} component={ProductCodePage} />
                <Route path={'/results/510k/:k_number'} component={Five10KPage} />
                <Route path={'/results/pma/:pma_number'} component={PMAPage} />
                <Route path={'/results/regulation_number/:regulation_number'} component={RegnumPage} />
                <Route path={'/results'} component={SearchResultsPage} />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/overview'} component={ProfileOverview} />
              </Switch>
              <Route component={Footer} />
            </ErrorBoundary>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App;