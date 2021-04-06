import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Header, Grid } from 'semantic-ui-react';
import SignInUseCase from "../../application/signin/SignInUseCase";

type LoginData = {
    username: string;
    password: string;
};

interface SignInFormProps {
    signInUseCase: SignInUseCase
}

export function SignInForm(props: SignInFormProps) {
    const { register, errors, handleSubmit } = useForm<LoginData>();
    const { signInUseCase } = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        signInUseCase.execute(username, password)
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
                <Header as='h2' color='teal' textAlign='center'>
                    Sign-in
                </Header>
                <Form size="small" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field error={!!errors.username}>
                        <label htmlFor="username">Username: </label>   
                        <div className="ui left icon input">                 
                            <input 
                                id="username"
                                name="username"
                                type="text"
                                placeholder="type your user name"
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
                                placeholder="type your password"
                                ref={register({required: true})} 
                                onChange={handlePasswordChange}  />                
                            <i aria-hidden="true" className="lock icon"></i>    
                        </div>
                        {errors.password && errors.password.type === "required" && (
                            <span role="alert" className="errorMessage">Password is required.</span>
                        )}
                    </Form.Field>
                    <Form.Field>
                        <Button primary type='submit' name="signin">Sign in</Button>        
                    </Form.Field>            
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default SignInForm