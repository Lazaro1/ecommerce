import React from 'react'
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import AppBar from './components/AppBar'


function Routes() {
 
    return (
        <BrowserRouter>
            <AppBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;