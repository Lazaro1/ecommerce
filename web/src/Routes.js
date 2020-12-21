import React from 'react'
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import AppBar from './components/AppBar'
import CreateUsers from './pages/CreateUsers'



function Routes() {
 
    return (
        <BrowserRouter>
            <AppBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/CreateUsers" component={CreateUsers}/>
            </Switch>    
        </BrowserRouter>
    );
  }
  
  export default Routes;