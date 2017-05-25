import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog/Blog';
import HomePage from './HomePage';
import About from './About/About';
import Contact from './Contact/Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;