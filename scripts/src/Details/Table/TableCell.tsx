/// <reference path="./table.d.ts" />
import React from "react";
import {Link} from "react-router-dom";
import { OPENFDA_KEY_NAMES, ID_FIELD_TO_SLUG } from 'src/constants';

type keyType = keyof typeof OPENFDA_KEY_NAMES;
function TableCell(props: {keyName: keyType, value: any}) {
  if (!props.value) {
    return <span>None</span>;
  }
  if (props.keyName in ID_FIELD_TO_SLUG) {
    return (<Link to={`/results/${ID_FIELD_TO_SLUG[props.keyName]}/${props.value}`}>
      {props.value}
      </Link>);
  }
  else if (props.keyName == "application_length") {
    return <span>{parseInt(props.value)} days</span>;
  }
  else if (props.keyName == "cost") {
    return <span>{new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(props.value)}</span>;
  }
  else if (props.keyName == "date_received") {
    let date = new Date(props.value);
    return <span>{date.toLocaleDateString()}</span>;
  }
  return <span>{props.value}</span>;
}
export default TableCell;