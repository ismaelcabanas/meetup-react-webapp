import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/component/Home";
import SignInForm from './user/component/signin/SignInForm'
import SignUpForm from "./user/component/signup/SignUpForm";
import ProtectedRoute from './ProtectedRoute'

export default function Routes() {    
    return (
        <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/signin" component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
        </Switch>
    );
}