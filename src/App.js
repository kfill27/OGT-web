import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';

import Main from './Main';
import SignInForm from './SignInForm/SignInForm';

class App extends Component {
  state = {open: false};
  
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    const titleStyle= {
      textAlign: 'center',
    }
    // iconElementRight={this.state.logged ? <Logged /> : <Login />}
    
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="ONE GOOD THING"
            titleStyle={titleStyle}
            onTouchTap={this.handleToggle}
            iconElementRight={<SignInForm />}
            style={{background:'#ffffff', color: 'blue'}}
          />
          <Drawer open={this.state.open}>
            <Link to='/'><Subheader>One Good Thing</Subheader></Link>
            <Link to='/blog'><MenuItem>Blog</MenuItem></Link>
            <Link to='/about'><MenuItem>About</MenuItem></Link>
            <Link to='/contact'><MenuItem>Contact</MenuItem></Link>
            <Link to='/good-things'><MenuItem>Good Things</MenuItem></Link>
          </Drawer>
          <Main />
       </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
