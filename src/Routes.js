import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/component/Home";
import SignInUseCase from './user/application/signin/SignInUseCase';
import SignInForm from './user/component/signin/SignInForm'
import SignUpForm from "./user/component/signup/SignUpForm";
import AuthenticationServiceFactory from './user/domain/factories/AuthenticationServiceFactory';
import StorageRepositoryFactory from './user/domain/factories/StorageRepositoryFactory';
import ProtectedRoute from './ProtectedRoute'

export default function Routes() {
    const signInUseCase = new SignInUseCase(
        AuthenticationServiceFactory.create(),
        StorageRepositoryFactory.localStorage(window.localStorage))

    return (
        <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/signin">
                <SignInForm signInUseCase={signInUseCase} />
            </Route>
            <Route exact path="/signup" component={SignUpForm} />
        </Switch>
    );
}