import React from "react";
import SearchBox from "../Search/SearchBox";
import AuthFormContainer from "../Accounts/AuthFormContainer";
import "./AnoraRowHead.scss";

export default (props: {isAuth?: boolean}) =>

<div className="anora-row-head">
    <div className="my-container">
        <div className="">
            <img src={require("../img/anora-main-logo-white-text.svg")} alt="Nova Approval Home" className=""width="271px" height="76px"/>
        </div>
    </div>
    <div className="push">
        {props.isAuth
            ? <AuthFormContainer />
            : <SearchBox autofocus={false} landing={true}/>
        }
    </div>
</div>;
