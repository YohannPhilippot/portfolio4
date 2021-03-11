import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    
      
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
