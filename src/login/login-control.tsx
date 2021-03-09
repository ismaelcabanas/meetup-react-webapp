import React from 'react';
import {Container} from 'react-bootstrap';
import {LoginForm} from './login-form';

export function LoginControl() {
    return (
        <Container fluid>
            <LoginForm />
        </Container>
    )
}