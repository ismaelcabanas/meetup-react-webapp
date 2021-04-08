import React from 'react'
import { Container, Header, Form, Button, Message } from 'semantic-ui-react';

export function SignUpForm() {
    return (
        <Container>
            <h1>Sign Up</h1>
            <Form size="small">
                <Form.Field>
                    <label htmlFor="name">Name: </label>   
                    <div className="ui left icon input">                 
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"  />                
                        <i aria-hidden="true" className="user icon"></i>
                    </div>                       
                </Form.Field>
                <Form.Field>
                    <label htmlFor="email">Email: </label>   
                    <div className="ui left icon input">                 
                        <input 
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Your email"  />                
                        <i aria-hidden="true" className="email icon"></i>
                    </div>                       
                </Form.Field>                
                <Form.Field>
                    <label htmlFor="password">Password: </label>   
                    <div className="ui left icon input">                 
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Your password"  />                
                        <i aria-hidden="true" className="lock icon"></i>
                    </div>                       
                </Form.Field>      
                <Form.Field>
                    <Button primary type='submit' name="signup">Sign up</Button>        
                </Form.Field>                                                                                                        
            </Form>
            <Message>
                Have an account? <a role='link' href='/signin'>Sign In</a>
            </Message>
        </Container>
    )
}

export default SignUpForm;