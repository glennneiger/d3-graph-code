import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './changes-password.scss';
class ChangePassword extends Component {
    render() {
        return (
            <div className="col-md-9 col-sm-8 top-tabs comment-tabs">
                <div className="change_password_div">
                    <h2>Change Password</h2>
                    <Form className="passrd_form row">
                    <div className="col-md-5 col-sm-6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Current Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm New Password" />
                        </Form.Group>
                        <Button className="btn update_pass_btn" type="submit">
                        Update Password
                        </Button>
                        <div className="forgot_pass text-center">
                                <Link to={'/'}>I forgot my password</Link>
                            </div>
                        </div>
                    </Form>
            </div>
            </div>
        );
    }
}

export default ChangePassword; 