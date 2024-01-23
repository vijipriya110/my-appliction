import React from 'react'

import './App.css';
// import Buttons from './components/Buttons';
import Base from './Base/Base';
import Dashboard from './components/Dashboard';
import Buttons from './components/Buttons';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Utilites from './components/Utilites';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
      <Switch>
        <Route exact path="/">
          <Base/>
        </Route>

        <Route path="/dashboard">
        <Dashboard/>
        </Route>

        <Route path="/buttons">
          <Buttons/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
        
        <Route path="/utilites">
        <Utilites/>
        </Route>
        
      </Switch>
      
    </div>
  )
}

export default App