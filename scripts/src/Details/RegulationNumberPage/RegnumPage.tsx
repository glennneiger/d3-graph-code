import React, { Component } from 'react';
import "./RegnumPage.scss";
import { connect } from 'react-redux';
import { fetchRegulationNumberData } from 'src/store/details/actions'
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import RegnumActivity from "./RegnumActivity";
import RegnumBreakdown from "./RegnumBreakdown";
import DescriptionTable from "src/Details/Table/DescriptionTable/DescriptionTable";
import ListTable from "src/Details/Table/ListTable/ListTable";
import TextView from "../TextView/TextView";
import Loading from "src/Loading/Loading";
import {get} from "lodash-es";

import { RootState } from 'src/store';

const mapStateToProps = (state: RootState) => state.details;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: e => dispatch(fetchRegulationNumberData(e))
  }
};

class RegnumPage extends Component<any, any> {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.regulation_number);
  }

  render() { 
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="col-12">
        <Tabs>
          <Tab label="General Information">
            <div className="col-12">
              <h3>General Information</h3>
            </div>
            <div className="col-12 col-sm-6">
            All this information is sourced from the <a target="_blank" href={get(this.props.result[0].item, "links.fda")}>FDA website</a> verbatim.<br /><br />
              <DescriptionTable data={this.props.result[0].item} keys={[
                "part", "subpart", "device_class"
              ]} />
              <TextView data={this.props.result[0].item} keys={["identification"]} />
              <strong>{this.props.result[3].items.length} Product Codes under this regulation number</strong>
              <ListTable data={this.props.result[3].items} headers={["product_code", "device_name", "medical_specialty"]} />
            </div>
            <div className="col-12 col-sm-6">
              <h4>Application Breakdown</h4>
              <RegnumBreakdown />
            </div>
          </Tab>
          <Tab label="Application Data">
            <RegnumActivity />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegnumPage);