import React, { PureComponent } from 'react';
import './AuthPage.scss';
import AnoraRowHead from "../Landing/AnoraRowHead";

class AuthPage extends PureComponent {

    render() {
        return (
            <div className='auth-page-container'>
                <AnoraRowHead isAuth />
            </div>
        );
    }
}

export default AuthPage;