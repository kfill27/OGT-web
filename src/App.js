import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

import HomePage from './HomePage';

class App extends Component {
  state = {open: false};
  
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="One Good Thing"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}>
            <Subheader>One Good Thing</Subheader>
            <MenuItem>Blog</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Drawer>
          <HomePage {...this.props}/>
       </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
