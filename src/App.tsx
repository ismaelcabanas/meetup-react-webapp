import React from 'react';
import SignInUseCase from './user/application/signin/SignInUseCase';
import SignInForm from './user/component/signin/SignInForm'
import AuthenticationServiceFactory from './user/domain/factories/AuthenticationServiceFactory';
import StorageRepositoryFactory from './user/domain/factories/StorageRepositoryFactory';

function App() {
  const signInUseCase = new SignInUseCase(
    AuthenticationServiceFactory.create(),
    StorageRepositoryFactory.localStorage())
    
  return (
    <div className="App">
      <SignInForm signInUseCase={signInUseCase} />
    </div>
    
  );
}

export default App;
