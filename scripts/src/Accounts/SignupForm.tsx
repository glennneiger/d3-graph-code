import React, { PureComponent } from 'react';
import {
    Form,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap';
import { List } from 'lodash';

interface SignUpFormState {
    form: Object,
    errors: any
}

class SignUpForm extends PureComponent<{}, SignUpFormState> {

    constructor(props) {
        super(props);
        this.state = {form: {
            email: '',
            password: '',
            confirm_password: ''
        }, errors: []}
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
        const isInvalidPassword = errors.includes('password');
        const isInvalidConfirmPassword = errors.includes('confirm_password');

        return (
            <Form className='signup-form'>
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
                <Form.Group>
                    <Form.Control
                        name='confirm_password'
                        className={`form-text-input ${isInvalidConfirmPassword ? 'error' : ''}`}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e: any) => this.onChange(e.target.name, e.target.value)}
                    />
                    {isInvalidConfirmPassword && <div className='err-msg'>Please enter confirm password</div>}
                </Form.Group>
                
                <Button
                    className='sign-in-up-btn'
                    type='submit'
                    onClick={(e) => this.onSubmit(e)}
                >
                    Sign Up
                </Button>
            </Form>
        );
    }
}

export default SignUpForm;