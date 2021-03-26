import './App.scss';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Menu from './components/Menu'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    
      <div>
        <BrowserRouter>
          <Menu />
          <Switch>

            <Route exact path='/about' component={About} />
            
            <Route  path='/skills' component={Skills} />
            <Route  path='/contact' component={Contact} />           
           
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
