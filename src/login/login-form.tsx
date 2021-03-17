import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

type LoginData = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const { register, errors, handleSubmit } = useForm<LoginData>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = (data: LoginData) => {
        alert(JSON.stringify(data));
      };

    return (
        <div>
            {errorMessage !== null &&
                <div>{errorMessage}</div>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>Login: </div>
                    <div>
                        <input 
                            name="email"
                            type="text" 
                            ref={register({required: true})} />
                    </div>
                    <div>Password: </div>
                    <div>
                        <input 
                            name="password"
                            type="password" 
                            autoComplete="password" 
                            ref={register({required: true})} />
                    </div>
                    <div><input type="submit" value="Log in" /></div>
                </div>
            </form>
        </div>
    );
}