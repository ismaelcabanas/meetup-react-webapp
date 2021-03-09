import React from 'react';
import {Navbar, Container, Form, Button} from 'react-bootstrap';

export function LoginForm() {
    return (
        <Container fluid="md">
            <Navbar expand="sm" variant="dark" bg="primary">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <span className="h3">Login</span>                    
                </div>
            </Navbar>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
            </Container>
        </Container>
    )
}