import React from 'react'
import { Grid, Header, Form, Button, Card } from 'semantic-ui-react';

export function SignUpForm() {
    return (
        <Grid centered columns={2} style={{ height: '100vh' }} verticalAlign="middle">
            <Grid.Column>                
                <Card centered>
                    <Card.Content>
                        <Header as='h2' textAlign='center'>
                            Sign Up
                        </Header>
                        <Form size="small">
                            <Form.Field>
                                <label htmlFor="name">Name: </label>   
                                <div>                 
                                    <input 
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"  />                
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
                                    <i aria-hidden="true" className="user icon"></i>
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
                                <Button primary type='submit' name="signup">Sign Up</Button>        
                            </Form.Field>                                                                                               
                            Have an account? <a role='link' href='/signin'>Sign In</a>
                                                
                        </Form>                            
                    </Card.Content>    
                </Card>                
            </Grid.Column>
        </Grid>
    )
}

export default SignUpForm;