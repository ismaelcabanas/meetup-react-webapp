import React from 'react';
import SignInUseCase from './user/application/sigin/SignInUseCase';
import SigInForm from './user/component/signin/SignInForm'

function App() {
  const onSignIn = (username, password) => {
    new SignInUseCase()
    .execute({username}, {password})
  }
  return (
    <div className="App">
      <SigInForm />
    </div>
    
  );
}

export default App;
