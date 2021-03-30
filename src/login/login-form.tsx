import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthenticationResult } from "./services/authenticationResult";
import { AuthenticationService } from "./services/authenticationService";
import { HttpClient } from "../shared/http-client";

type LoginData = {
    email: string;
    password: string;
};


export function LoginForm() {
    const { register, errors, handleSubmit } = useForm<LoginData>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        var formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", password);
        HttpClient.postForm<AuthenticationResult>("", formdata)
            .then(data => AuthenticationService.authenticate(data, email));        
    }

    function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <div>
            {errorMessage !== null &&
                <div>{errorMessage}</div>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>                        
                        <input 
                            id="email"
                            name="email"
                            type="text" 
                            ref={register({required: true})} 
                            onChange={handleLoginChange} />
                    </div>

                    {errors.email && errors.email.type === "required" && (
                    <div role="emailError" className="error">Email is required.</div>
                    )}
                    
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            id="password"
                            name="password"
                            type="password" 
                            autoComplete="password" 
                            ref={register({required: true})} 
                            onChange={handlePasswordChange} />
                    </div>

                    {errors.password && errors.password.type === "required" && (
                    <div role="passwordError" className="error">Password is required.</div>
                    )}

                    <div><input name="sigin" type="submit" value="Sign in" /></div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;