import React, { Component } from 'react';
import "./ProductCodePage.scss";
import { connect } from 'react-redux';
import { fetchProductCodeData } from 'src/store/details/actions'
import DescriptionTable from "src/Details/Table/DescriptionTable/DescriptionTable";
import PropertyGrid from "src/Details/PropertyGrid/PropertyGrid";
import ApplicationActivity from "./ApplicationActivity";
import RecallData from "./RecallData";
import AdverseData from "./AdverseData";
import TextView from "../TextView/TextView";
import { Link } from 'react-router-dom';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import Loading from "src/Loading/Loading";
import {get} from "lodash-es";

const mapStateToProps = state => ({
  ...state.details
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductCodeData: e => dispatch(fetchProductCodeData(e))
  }
};

class ProductCodePage extends Component<any, any> {
  componentDidMount() {
    this.props.fetchProductCodeData(this.props.match.params.product_code);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    
    var five10kTabLabel;
    var pmaTabLabel;
    if (this.props.result[1].items.length == 0) {
      five10kTabLabel = "510(K) Applications (No Data)";
    } else {
      five10kTabLabel = "510(K) Applications";
    }
    if (this.props.result[2].items.length == 0) {
      pmaTabLabel = "PMA Applications (No Data)";
    } else {
      pmaTabLabel = "PMA Applications";
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
              <DescriptionTable data={this.props.result[0].item} keys={["device_class", "regulation_number", "medical_specialty", "review_panel"]} />
              <PropertyGrid title="Flags" data={this.props.result[0].item} keys={["implant_flag", "gmp_exempt_flag", "life_sustain_support_flag", "third_party_flag"]} flag="true" />
            </div>
            <div className="col-12 col-sm-6">
              <TextView data={this.props.result[0].item} keys={["definition", "description", "PHYSICALSTATE", "TECHNICALMETHOD", "TARGETAREA"]} />
            </div>
          </Tab>
          <ApplicationActivity label={five10kTabLabel}  results={this.props.result[1]} />
          <ApplicationActivity label={pmaTabLabel} results={this.props.result[2]} />
          {/* <RecallData label="Recalls" results={this.props.result[3]} /> */}
          {/* <AdverseData label="Adverse Events" results={this.props.result[4]} /> */}
        </Tabs>
        {/* <footer>
          Check out the source of this product code information and more on the <a target="_blank" href={get(this.props.result[0].item, "links.fda")}>FDA website</a>
        </footer> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCodePage);