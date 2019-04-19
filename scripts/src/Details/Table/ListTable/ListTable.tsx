/// <reference path="../table.d.ts" />
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {map} from "lodash-es";
import { OPENFDA_KEY_NAMES } from 'src/constants';
import { RootState } from 'src/store';
import { exactKeys } from 'src/utils';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import TableCell from "../TableCell";

type keyType = keyof typeof OPENFDA_KEY_NAMES;
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

function ListTable(props: {data: [{[key in keyType]: any}], headers: Array<keyType>}) {
  if (!props.data) {
    return null;
  }
  let data = props.data;
  let columns = props.headers.map(key => ({
    "Header": OPENFDA_KEY_NAMES[key] || key,
    "accessor": key,
    "Cell": ({row}) => <TableCell keyName={key} value={row[key]} />
  }));
  let pageSize = 5;
  let showPagination = data.length > pageSize;
  return (
    <ReactTable filterable={true} showPagination={showPagination} minRows={0} pageSize={pageSize} data={data} columns={columns}
      defaultFilterMethod={filterCaseInsensitive} />
  );
}

function filterCaseInsensitive(filter, row) {
	const id = filter.pivotId || filter.id;
	return (
		row[id] !== undefined ?
			String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
		:
			true
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);