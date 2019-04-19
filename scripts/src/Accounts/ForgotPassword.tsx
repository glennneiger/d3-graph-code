import React, { PureComponent } from 'react';
import {
    Form,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap';

interface ForgotPasswordFormState { 
    form: Object,
    errors: any
}

interface ForgotPasswordFormProps {
    changeTab: (arg0: string) => void
}

class ForgotPassword extends PureComponent<ForgotPasswordFormProps, ForgotPasswordFormState> {

    constructor(props) {
        super(props);
        this.state = {form: {email: ''}, errors: []}
    }
    
    formValidate() {
        const { form } = this.state;
        let errors = []
        for(let field of Object.keys(form)) {
            if (!form[field]) {
                errors.push(field)
            }
        }
        this.setState({errors: errors})
        return errors.length === 0;
    }

    onChange(field: string, val: string) {
        const { form, errors } = this.state;
        let splicedErrors = [...errors];
        const index = errors.indexOf(field);
        index !== -1 && splicedErrors.splice(errors.indexOf(field), 1);

        console.log(field, errors.indexOf(field))
        this.setState({
            form: {...form, [field]: val},
            errors: splicedErrors
        })
    }

    onSubmit(e) {
        if(this.formValidate()) {
            // api call here
        } else {
            e.preventDefault();
        }
    }

    render() {
        const { errors } = this.state;
        const isInvalidEmail = errors.includes('email');

        const { changeTab } = this.props;
        return (
            <Form className='forgot-pass-form'>
                <div
                    className='back-to-login'
                    onClick={() => changeTab('login')}
                >
                    <i className="fas fa-arrow-left" />
                    &nbsp; Back to login
                </div>
                <Form.Group>
                    <Form.Control
                        name='email'
                        className={`form-text-input ${isInvalidEmail ? 'error' : ''}`}
                        type="email"
                        placeholder="Email Address"
                        onChange={(e: any) => this.onChange(e.target.name, e.target.value)}
                    />
                    {isInvalidEmail && <div className='err-msg'>Please enter valid email</div>}
                </Form.Group>
                <Button
                    className='sign-in-up-btn'
                    type='submit'
                    onClick={(e) => this.onSubmit(e)}
                >
                    Reset Password
                </Button>
            </Form>
        );
    }
}

export default ForgotPassword;