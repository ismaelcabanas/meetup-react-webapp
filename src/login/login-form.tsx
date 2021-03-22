import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

type LoginData = {
    email: string;
    password: string;
};

export function LoginForm() {
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
                    <div>
                        
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>                        
                        <input 
                            id="email"
                            name="email"
                            type="text" 
                            ref={register({required: true})} />
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
                            ref={register({required: true})} />
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