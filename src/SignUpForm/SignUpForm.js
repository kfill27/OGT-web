import React from 'react';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class SignUpForm extends React.Component {

  render() {
    return (
      <div>
        <EmailInput />
        <PasswordInput />
      </div>
    );
  }

}

export default SignUpForm;