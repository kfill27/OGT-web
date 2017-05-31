import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class SignInForm extends React.Component {
  
  state = {
    open: false,
  };
  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  handleSubmit = () => {
    var myHeaders = new Headers();

    var myInit = { method: 'POST',
                   headers: myHeaders,
                   mode: 'no-cors',
                   cache: 'default' };

    var myRequest = new Request('https://onegoodthing-api.herokuapp.com/authenticate', myInit);

    fetch(myRequest).then(function(response) {
      console.log('hereee', response);
    });
  };
  
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
    return (
      <div>
        <FlatButton 
          onTouchTap={this.handleOpen}
          label="Log In"
          secondary={true}
        />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <EmailInput />
          <PasswordInput />
        </Dialog>
      </div>
    );
  }

}

export default SignInForm;