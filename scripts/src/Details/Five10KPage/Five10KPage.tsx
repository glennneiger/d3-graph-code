import React, { Component } from 'react';
import "./Five10KPage.scss";
import { connect } from 'react-redux';
import { fetchFive10KData } from 'src/store/details/actions';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from "src/Details/Tabs/Tabs";
import {get} from "lodash-es";
import DescriptionTable from "src/Details/Table/DescriptionTable/DescriptionTable";
import { RootState } from 'src/store';
import Loading from "src/Loading/Loading";
import "../Tabs/Tabs.scss";
import Document from "src/Details/Document/Document";
import PropertyGrid from "src/Details/PropertyGrid/PropertyGrid";
import Stats from "src/Details/Layout/Stats";

const mapStateToProps = (state: RootState) => state.details;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDetail: e => dispatch(fetchFive10KData(e)),
  }
};

class Five10KPage extends Component<any, any> {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.k_number);
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
                "applicant","product_code", "regulation_number","advisory_committee_description", 
                "clearance_type", "decision_description", "date_received",
                "decision_date" ,"statement_or_summary" 
              ]} />
            </div>
            <div className="col-12 col-sm-6">
              {/*Placeholder*/}
              <PropertyGrid title="" data={this.props.result[0].item} keys={["application_length", "cost"]} labels={["Review Time", "Estimated Cost"]} />
              <Stats />
            </div>
            {/* <footer>
              Check out the source of this 510(k) clearance information and more on the <a target="_blank" href={get(this.props.result[0].item, "links.fda")}>FDA website</a>
            </footer> */}
          </Tab>
          <Tab label="Statement or Summary (PDF)">
            View and search the 510(k) Summary or 510(k) Statement, the clearance letter, and the Indications for Use page when available.<br />
            Disclaimer: Summary information was not required until 1990.  Furthermore, Summary information was only regularly posted in the database starting in 2007.  As such, for the period between 1990 and 2006, only the clearance letter might be available in the database. <br />
            <Document src={get(this.props.result[0].item, "pdf_link", "")} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Five10KPage);