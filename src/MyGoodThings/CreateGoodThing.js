import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class CreateGoodThing extends React.Component {
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
    fetch('https://onegoodthing-api.herokuapp.com/things', {
      method: 'POST',
      mode: 'no-cors',
    }).then(function(response) {
      console.log('done', response);
    }).catch(function(err) {
      console.log('error', err);
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
        <RaisedButton label="Add One Good Thing" onTouchTap={this.handleOpen} />
        <Dialog
          title="Today's One Good Thing:"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DatePicker 
            hintText="Date" 
            container="inline" 
            mode="landscape" 
            locale="en-US"
          />
          <TextField       
            hintText="Start writing here..."
            floatingLabelText="Today's One Good Thing"
            multiLine={true}
            rows={1}
          />
        </Dialog>
      </div>
    );
  }

}

export default CreateGoodThing;