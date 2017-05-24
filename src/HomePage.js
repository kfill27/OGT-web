import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import SignUpForm from './SignUpForm/SignUpForm';

class HomePage extends React.Component {

  state = {
    open: false,
  };
  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Home Page Goes Here</h1>
        <RaisedButton 
          label="Sign Up Now"
          primary={true}
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <SignUpForm />
        </Dialog>
      </div>
    );
  }

}

export default HomePage;