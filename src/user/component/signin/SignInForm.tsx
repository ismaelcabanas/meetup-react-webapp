import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

type LoginData = {
    username: string;
    password: string;
};

export function SignInForm() {
    const { register, errors, handleSubmit } = useForm<LoginData>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        console.log('Submit form')
    }

    function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="username">Username: </label>                        
                        <input 
                            id="username"
                            name="username"
                            type="text"
                            ref={register({required: true})} 
                            onChange={handleUsernameChange}  />
                    </div>

                    {errors.username && errors.username.type === "required" && (
                    <div role="emailError" className="error">Username is required.</div>
                    )}

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            id="password"
                            name="password"
                            type="password" 
                            autoComplete="password"
                            ref={register({required: true})} 
                            onChange={handlePasswordChange}  />
                    </div>
                    
                    {errors.password && errors.password.type === "required" && (
                    <div role="passwordError" className="error">Password is required.</div>
                    )}
                    
                    <div><input name="sigin" type="submit" value="Sign in" /></div>
                </div>
            </form>            
        </div>
    )
}

export default SignInForm