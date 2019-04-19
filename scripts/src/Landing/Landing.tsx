import React from "react";
import "./Landing.scss";
import AnoraRowHead from "./AnoraRowHead";
import AnoraHeader from "./AnoraHeader";
import AnoraBody from "./AnoraBody";

function Landing() {
    return (
        <div className="anora-page-landing">
            <AnoraHeader />
            <AnoraRowHead />
            <AnoraBody />
        </div>
    );
}
export default Landing;