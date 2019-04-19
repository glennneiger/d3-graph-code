import React from "react";
import AccountHeader from "../Accounts/AccountHeader";
import './Header.scss';

interface IDetailsHeaderProps {
  detail_header: {title: string, id: string, type: string}
}
class DetailsHeader extends React.Component<IDetailsHeaderProps, {}> {
  render() {
    if (!this.props.detail_header) {
      return "";
    }
    return (
      <div className="row header">
        <div className="col-10">
          <h2>
            {this.props.detail_header.title}
          </h2>
        </div>
        <div className="col-2">
          <strong>{this.props.detail_header.id}</strong><br />
          <small className="text-muted">{this.props.detail_header.type}</small>
        </div>
      </div>
    );
  }
}

export default DetailsHeader;