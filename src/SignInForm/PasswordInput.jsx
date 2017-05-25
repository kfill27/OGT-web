import React from 'react';
import TextField from 'material-ui/TextField';

class PasswordInput extends React.Component {

  render() {
    return (
      <div>
        <TextField
          hintText="Password"
          fullWidth={true}
          type="password"
        />
      </div>
    );
  }

}

export default PasswordInput;