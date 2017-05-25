import React from 'react';

import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';

class HomePage extends React.Component {

  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Home Page Goes Here</h1>
        <SignUpForm />
        <SignInForm />
      </div>
    );
  }

}

export default HomePage;