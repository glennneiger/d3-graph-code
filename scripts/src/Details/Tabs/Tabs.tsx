import React from "react";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import "./Tabs.scss";
import { selectDetailTab } from 'src/store/details/actions';
import store from 'src/store';

function NovaTabs(props) {
  return <Tabs {...props}   onSelect={(index, label) => store.dispatch(selectDetailTab(label))}/>;
}

function NovaTab(props) {
  if (!props.children) return null;
  return <Tab label={props.label || "Tab"}>
    <div className="row">
    {props.children}
    </div>
  </Tab>
}

export {
  NovaTabs as Tabs,
  NovaTab as Tab
};