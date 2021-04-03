export function SignInForm() {
    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="username">Username: </label>                        
                        <input 
                            id="username"
                            name="username"
                            type="text" />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            id="password"
                            name="password"
                            type="password" 
                            autoComplete="password" />
                    </div>
                    
                    <div><input name="sigin" type="submit" value="Sign in" /></div>
                </div>
            </form>            
        </div>
    )
}

export default SignInForm