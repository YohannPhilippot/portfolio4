import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
