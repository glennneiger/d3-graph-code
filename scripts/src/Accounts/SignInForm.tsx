import React, { PureComponent } from 'react';
import {
    Form,
    FormControl,
    FormGroup,
    Col,
    Row,
    Button
} from 'react-bootstrap';

interface SignInFormState {
    form: Object,
    errors: any
}

interface SignInFormProps {
    changeTab: (arg0: string) => void
}

class SignInForm extends PureComponent<SignInFormProps, SignInFormState> {

    constructor(props) {
        super(props);
        this.state = {form: {
            email: '',
            password: ''
        }, errors: []}
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

    onSubmit(e) {
        if(this.formValidate()) {
            // api call here
        } else {
            e.preventDefault();
        }
    }

    render() {
        const { errors } = this.state;
        const { changeTab } = this.props;
        const isInvalidEmail = errors.includes('email');
        const isInvalidPassword = errors.includes('password');
        
        return (
            <Form className='login-form'>
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
                <Form.Group>
                    <Form.Control
                        name='password'
                        type="password"
                        placeholder="Password"
                        className={`form-text-input ${isInvalidPassword ? 'error' : ''}`}
                        onChange={(e: any) => this.onChange(e.target.name, e.target.value)}
                    />
                    {isInvalidPassword && <div className='err-msg'>Please enter password</div>}
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <label
                            className="form-checkbox"
                        >Remember Me
                            <input
                                type="checkbox"
                                name="remember_me"
                                onChange={(e: any) => this.onChange(e.target.name, e.target.checked)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </Col>
                    <Col md={6}>
                        <div
                            className='forgot-password'
                            onClick={() => changeTab('forgotPassword')}
                        >
                            Forgot Password
                        </div>
                    </Col>
                </Row>
                <Button
                    className='sign-in-up-btn'
                    type='submit'
                    onClick={(e: any) => this.onSubmit(e)}
                >
                    Sign In
                </Button>
                <Row className='social-login-separator'>
                    <Col md={4}>
                        <div className='horiz-line' />
                    </Col>
                    <Col md={4}>
                        <div className='sign-in-with'>OR SIGN IN WITH</div>
                    </Col>
                    <Col md={4}>
                        <div className='horiz-line' />
                    </Col>
                </Row>
                <Row className='social-login-container'>
                    <Col sm={12} md={6}>
                        <Button className='linkedin-btn'>
                            <i className="fab fa-linkedin-in" />
                            Linked In
                        </Button>
                    </Col>
                    <Col sm={12} md={6}>
                        <Button className='google-btn'>
                            <i className="fab fa-google" />
                            Google
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SignInForm;
