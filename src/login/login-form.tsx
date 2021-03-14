import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, Checkbox, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { green } from '@material-ui/core/colors';

export function LoginForm() {

    const paperStyle = {padding: 20, height:'70vh', width:280, margin:"20px auto"};
    const avatarStyle = {backgroundColor: '#1bbd7e'};
    const btnStyle = {margin: "8px 0"};

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid 
                    container
                    justify="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>                    
                </Grid>
                <Typography
                  component="h2"
                  variant="h5"
                  align="center">
                    Sign In
                </Typography> 
                <form data-testid='form'>                
                    <TextField id="email" label="Email" placeholder="Enter email" fullWidth required/>
                    <TextField id="password" label="Password" placeholder="Enter password" type="password" fullWidth required/>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" />        
                        }
                        label="Remember me"
                    />
                    <Button name="signin" type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign in</Button>
                </form>       
                <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography> Don't you have an account? 
                    <Link href="#"> Sign up </Link>
                </Typography>
            </Paper>        
        </Grid>
    )
}

export default LoginForm;