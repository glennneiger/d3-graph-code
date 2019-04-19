/// <reference path="../table.d.ts" />
import React from 'react';
import { Link } from 'react-router-dom';
import "./DescriptionTable.scss";
import { connect } from 'react-redux';
import { OPENFDA_KEY_NAMES } from 'src/constants';
import { RootState } from 'src/store';
import { exactKeys } from 'src/utils';
import TableCell from "../TableCell";

type keyType = keyof typeof OPENFDA_KEY_NAMES;
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

function DescriptionTable(props: {data: {[key in keyType]: any}, keys: Array<keyType>}) {
  if (!props.data) {
    return null;
  }
  return (
    <table className="table table-sm nova_description_table">
      <thead>
      </thead>
      <tbody>
        {(props.keys || exactKeys(props.data)).map(key =>
          <tr key={key}>
            <th>{OPENFDA_KEY_NAMES[key] || key}</th>
            <td>
              <TableCell keyName={key} value={props.data[key]} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(DescriptionTable);