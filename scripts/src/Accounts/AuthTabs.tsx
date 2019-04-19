import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default (props: {activeTab: string, changeTab: any}) => 
    <Row className='auth-tabs'>
        <Col
            sm={6}
            md={6}
            className={`auth-tab ${props.activeTab === 'login' ? 'active' : ''}`}
            onClick={() => props.changeTab('login')}
        >
            Sign In
        </Col>
        <Col
            sm={6}
            md={6}
            className={`auth-tab ${props.activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => props.changeTab('signup')}        
        >
            Sign Up
        </Col>
    </Row>