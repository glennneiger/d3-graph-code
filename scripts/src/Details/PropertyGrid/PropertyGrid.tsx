import React from 'react';
import { Link } from 'react-router-dom';
import "./_PropertyGrid.scss";
import { connect } from 'react-redux';
import { RootState } from 'src/store';
import { OPENFDA_KEY_NAMES } from 'src/constants';
import { exactKeys } from 'src/utils';
import TableCell from "src/Details/Table/TableCell";

type keyType = keyof typeof OPENFDA_KEY_NAMES;

const mapStateToProps = (state: RootState) => state.details;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

function PropertyGrid(props: {title?: string, data: {[key in keyType]: any}, keys: Array<keyType>, labels?: Array<string>, flag: boolean}) {
  
  var flagHint;
  if (props.flag) {
    flagHint = "Y = yes, N = no";
  } else {
    flagHint = "";
  }
  
  return (
    <div>
      <br />{props.title && 
      <h3>{props.title}</h3>}
      {flagHint}
      <dl className="row nova-property-grid">
      {(props.keys || exactKeys(props.data)).map((key, i) =>
        <div className="col-12 col-sm-6" key={key}>
          <dt>{props.labels ? props.labels[i] : OPENFDA_KEY_NAMES[key]}</dt><hr />
          <dd><TableCell keyName={key} value={props.data[key]} /></dd>
        </div>
      )}
      </dl>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(PropertyGrid);