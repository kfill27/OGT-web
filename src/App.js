import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom'

import Main from './Main';

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
            <Link to='/'><Subheader>One Good Thing</Subheader></Link>
            <Link to='/blog'><MenuItem>Blog</MenuItem></Link>
            <Link to='/about'><MenuItem>About</MenuItem></Link>
            <Link to='/contact'><MenuItem>Contact</MenuItem></Link>
          </Drawer>
          <Main />
       </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
