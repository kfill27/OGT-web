import React from 'react';
import TextField from 'material-ui/TextField';

class EmailInput extends React.Component {

  render() {
    return (
      <div>
        <TextField
          hintText="Email Address"
          fullWidth={true}
        />
      </div>
    );
  }

}

export default EmailInput;