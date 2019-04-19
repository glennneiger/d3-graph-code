import React from 'react';
import { Link } from 'react-router-dom';
import "./TextView.scss";
import { connect } from 'react-redux';
import { RootState } from 'src/store';
import { OPENFDA_KEY_NAMES } from 'src/constants';
import { exactKeys } from 'src/utils';
import TableCell from "src/Details/Table/TableCell";

type keyType = keyof typeof OPENFDA_KEY_NAMES;

const mapStateToProps = (state: RootState) => state.details;

const mapDispatchToProps = (dispatch, ownProps) => ({});

function TextView(props: {data: {[key in keyType]: any}, keys: Array<keyType>, inline?: boolean}) {
  return (
    <div>
      <dl className={props.inline ? "nova-text-view-inline": "nova-text-view"}>
      {(props.keys || exactKeys(props.data)).map(key =>
        <div key={key}>
        <dt>{OPENFDA_KEY_NAMES[key]}</dt>
        <dd><TableCell keyName={key} value={props.data[key]} /></dd>
        </div>
      )}
      </dl>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TextView);