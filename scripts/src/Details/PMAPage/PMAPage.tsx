import React, { Component } from 'react';
import "./PMAPage.scss";
import "../Tabs/Tabs.scss";
import { connect } from 'react-redux';
import { fetchPMAData } from 'src/store/details/actions'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import DescriptionTable from "src/Details/Table/DescriptionTable/DescriptionTable";
import GanttChart from "src/Details/Chart/GanttChart";
import AmGantt from "src/Details/Chart/AmGantt";
import {get} from "lodash-es";
import { RootState } from 'src/store';
import Loading from "src/Loading/Loading";
import Document from "src/Details/Document/Document";
import PropertyGrid from "src/Details/PropertyGrid/PropertyGrid";
import Stats from "src/Details/Layout/Stats";
import TextView from "../TextView/TextView";

const mapStateToProps = (state: RootState) => state.details;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDetail: e => dispatch(fetchPMAData(e))
  }
};

class PMAPage extends Component<any, any> {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.pma_number.trim());
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    
    return (
      <div className="col-12">
        <Tabs>
          <Tab label="General Information">
          <div className="col-12 col-sm-6">
            All this information (except for estimated cost) is sourced from the <a target="_blank" href={get(this.props.result[0].item, "links.fda")}>FDA website</a> verbatim.<br /><br />
            <DescriptionTable data={this.props.result[0].item} keys={[
              "generic_name", "docket_number", "applicant", "product_code", 
              "regulation_number", "advisory_committee_description", "date_received", "decision_date",
              "decision_code"
            ]} />
            <TextView data={this.props.result[0].item} keys={["ao_statement"]} />
          </div>
          <div className="col-12 col-sm-6">
            <PropertyGrid title="" data={this.props.result[0].item} keys={["application_length", "cost"]}  labels={["Review Time", "Estimated Cost"]} />
            <Stats />
          </div>
          {/* <footer>
            Check out the source of this PMA clearance information and more on the <a target="_blank" href={get(this.props.result[0].item, "links.fda")}>FDA website</a>
          </footer> */}
          </Tab>
          <Tab label="Timeline">
            <div className="col-12">
              <h3>Application Timeline</h3>
              Explore the timeline of correspondences for this medical device, including the original PMA application and all supplements.<br /><br />
            </div>
            <AmGantt items={this.props.result[1].items} />
          </Tab>
          <Tab label="Approval Order (PDF)">
            View and search the Approval Order PDF when available. <br /><br />
            <Document src={get(this.props.result[0].item, "links.pdf_links.approval_order", "")} />
          </Tab>
          <Tab label="Summary / Safety (PDF)">
            View and search the Summary/Safety PDF when available. <br /><br />
            <Document src={get(this.props.result[0].item, "links.pdf_links.summary_safety", "")} />
          </Tab>
          <Tab label="Labeling (PDF)">
            View and search the Labeling PDF when available. <br /><br />
            <Document src={get(this.props.result[0].item, "links.pdf_links.labeling", "")} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PMAPage);