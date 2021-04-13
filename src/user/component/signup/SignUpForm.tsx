import React from 'react'
import { ChangeEvent, FormEvent, useState } from "react";
import { Grid, Header, Form, Button, Card } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

interface SignUpData {
    firstName: string,
    lastName: string
}

export function SignUpForm() {
    const { register, errors, handleSubmit } = useForm<SignUpData>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function onSubmit(event: FormEvent<HTMLFormElement>) {
    }

    function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value)
    }

    return (
        <Grid centered columns={2} style={{ height: '100vh' }} verticalAlign="middle">
            <Grid.Column>                
                <Card centered>
                    <Card.Content>
                        <Header as='h2' textAlign='center'>
                            Sign Up
                        </Header>
                        <Form size="small" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Field>
                                <label htmlFor="firstName">First name: </label>   
                                <div>                 
                                    <input 
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Your first name"
                                        ref={register({required: true})} 
                                        onChange={handleFirstNameChange}  />                
                                </div> 
                                {errors.firstName && errors.firstName.type === "required" && (
                                    <span role="alert" className="errorMessage">First name is required.</span>
                                )}                       
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="lastName">Last name: </label>   
                                <div>                 
                                    <input 
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Your last name"
                                        ref={register({required: true})} 
                                        onChange={handleLastNameChange}  />                
                                </div>   
                                {errors.lastName && errors.lastName.type === "required" && (
                                    <span role="alert" className="errorMessage">Last name is required.</span>
                                )}                    
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
                            Have an account? <a href='/signin'>Sign In</a>
                                                
                        </Form>                            
                    </Card.Content>    
                </Card>                
            </Grid.Column>
        </Grid>
    )
}

export default SignUpForm;