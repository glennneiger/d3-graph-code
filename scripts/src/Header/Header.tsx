import { Link, Route, Switch } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import DetailsHeader from "./DetailsHeader";
import SearchBox from "../Search/SearchBox";
import AccountHeader from "../Accounts/AccountHeader";
import './Header.scss';

const mapStateToProps = state => ({
	detail_header: state.details.detail_header
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

class Header extends React.Component<any, {}> {
	render() {
		return (<div className="row nova-header">
			<div className="col-12 col-sm-1 nova-header-logo-container">
				<Link to="/">
					<img src={require("../img/anora-main-logo-white-text.svg")} alt="Nova Approval Home" className="nova-header-logo" />
				</Link>
			</div>
			<div className="col-12 col-sm-7">
				<Switch>
					<Route path={'/results'} exact render={e =>
						<SearchBox landing={false}/>
					} />
					<Route path={'/results'} render={e =>
						<DetailsHeader detail_header={this.props.detail_header} />
					} />
					<Route render={e =>
						<SearchBox landing={false}/>
					} />
				</Switch>
			</div>
			<div className="col-12 col-sm-4 nova-account-header">
				<AccountHeader />
			</div>
		</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);