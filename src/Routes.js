import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/component/Home";
import SignInUseCase from './user/application/signin/SignInUseCase';
import SignInForm from './user/component/signin/SignInForm'
import AuthenticationServiceFactory from './user/domain/factories/AuthenticationServiceFactory';
import StorageRepositoryFactory from './user/domain/factories/StorageRepositoryFactory';

export default function Routes() {
    const signInUseCase = new SignInUseCase(
        AuthenticationServiceFactory.create(),
        StorageRepositoryFactory.localStorage(window.localStorage))

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <SignInForm signInUseCase={signInUseCase} />
            </Route>
        </Switch>
    );
}