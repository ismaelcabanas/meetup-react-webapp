import React from 'react'
import { Container, Header, Form } from 'semantic-ui-react';

export function SignUpForm() {
    return (
        <Container>
            <h1>Sign Up</h1>
            <Form size="small">
                <Form.Field>
                    <label htmlFor="name">Your name: </label>   
                    <div className="ui left icon input">                 
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"  />                
                        <i aria-hidden="true" className="user icon"></i>
                    </div>                       
                </Form.Field>
            </Form>
        </Container>
    )
}

export default SignUpForm;