import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Header, Grid, Card, Message } from 'semantic-ui-react';
import { authenticate } from '../../service/Authenticator'

type LoginData = {
    username: string;
    password: string;
};

export function SignInForm() {
    const { register, errors, handleSubmit } = useForm<LoginData>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticationErrorMessage, setAuthenticationErrorMessage] = useState<string | null>(null);
    
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        authenticate(username, password)
            .then(data => {
                window.localStorage.setItem('accessToken', data.access_token)
                window.localStorage.setItem('username', username)
                document.location.href = '/';
            })
            .catch(error => {
                console.log(error)
                setAuthenticationErrorMessage("Invalid user credentials.")    
            })
    }

    function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <Grid centered columns={2} style={{ height: '100vh' }} verticalAlign="middle">
            <Grid.Column>
                <Card centered>
                    <Card.Content>
                        <Header as='h2' textAlign='center'>
                            Sign In
                        </Header>
                        <Form size="small" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Field error={!!errors.username}>
                                <label htmlFor="username">Username: </label>   
                                <div className="ui left icon input">                 
                                    <input 
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Your email"
                                        ref={register({required: true})} 
                                        onChange={handleUsernameChange}  />                
                                    <i aria-hidden="true" className="user icon"></i>
                                </div>
                                {errors.username && errors.username.type === "required" && (
                                    <span role="alert" className="errorMessage">Username is required.</span>
                                )}    
                            </Form.Field>
                            <Form.Field error={!!errors.password}>
                                <label htmlFor="password">Password: </label>
                                <div className="ui left icon input">   
                                    <input 
                                        id="password"
                                        name="password"
                                        type="password" 
                                        autoComplete="password"
                                        placeholder="Your password"
                                        ref={register({required: true})} 
                                        onChange={handlePasswordChange}  />                
                                    <i aria-hidden="true" className="lock icon"></i>    
                                </div>
                                {errors.password && errors.password.type === "required" && (
                                    <span role="alert" className="errorMessage">Password is required.</span>
                                )}
                            </Form.Field>
                            {authenticationErrorMessage != null && (
                                <Message color='red'>Invalid user credentials.</Message>
                            )}                            
                            <Form.Field>
                                <Button primary type='submit' name="signin">Sign In</Button>        
                            </Form.Field>
                            Don't have an account? <a href='/signup'>Sign Up</a>                        
                        </Form>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
}

export default SignInForm