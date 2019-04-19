import React from "react";
import { Row, Col } from 'react-bootstrap';

import "./wizard.scss";

function Wizard() {
  return (
    <div className="wizard-container">
      <Row>
        <Col md={3} sm={12}>
          <div className="wizard-container-button">
            <img
              src={require("../img/wizard_stick.png")}
              className="wizard-container-button-img"
            />
            <span className="wizard-container-button-text">Anora Wizard</span>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <WizardInfoItem
            value="$31,837"
            name="Avg. Calculated Cost"
          />
        </Col>
        <Col md={3} sm={12}>
          <WizardInfoItem
            value="206"
            name="Days Avg Review Time"
          />
        </Col>
        <Col md={3} sm={12}>
          <WizardInfoItem
            value="106"
            name="Applications last 12 months"
          />
        </Col>
      </Row>
    </div>
  );
}

interface wizardInfoPropTypes {
  value: any,
  name: string,
}

function WizardInfoItem(props: wizardInfoPropTypes) {
  return (
    <div className="wizard-info-item">
      <span className="wizard-info-item-value">{props.value}</span>
      <span className="wizard-info-item-name">{props.name}</span>
    </div>
  );
}

export default Wizard;
