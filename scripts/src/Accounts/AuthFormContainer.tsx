import React, { PureComponent } from 'react';
import AuthTabs from './AuthTabs';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPassword from './ForgotPassword';

interface defaultFormState {
    currTab: string,
}

class AuthFormContainer extends PureComponent <{}, defaultFormState> {
    constructor(props) {
        super(props);
        this.state = { currTab: 'login' };
        this.onTabChange = this.onTabChange.bind(this);
    }
    onTabChange(currTab) {
        this.setState({ currTab })
    }

    render() {
        const { currTab } = this.state;
        return (
            <div className='auth-form-container'>
                {currTab !== 'forgotPassword' && 
                    <AuthTabs activeTab={currTab} changeTab={this.onTabChange}/>}
                {currTab === 'login'
                    ? <SignInForm changeTab={this.onTabChange} />
                    : currTab === 'signup'
                        ? <SignUpForm />
                        : <ForgotPassword changeTab={this.onTabChange} />
                }
            </div>
        );
    }
}

export default AuthFormContainer;