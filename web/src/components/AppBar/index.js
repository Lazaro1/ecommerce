import React from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

import './styles.css'

function AppBar() {  
  return (
    <div className="appbar-container">

      <div className="appbar-content">
        <h1>LOGO</h1>
        <div className="appbar-search">
            <input
            type="text"
            placeholder="O que você está procurando?"          
            />    
        </div>
        <div className="appbar-items">
          <Link to="/"> Home </Link>
          <Link to="login"> Login </Link>
        </div>

      </div>

    </div>
  );
}

export default AppBar;